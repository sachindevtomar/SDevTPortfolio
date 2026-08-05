import { environment } from '../../environments/environment';
import { AlfaLeetCodeProfile } from '../model/LeetCodeTypes';

const profileCache = new Map<string, Promise<AlfaLeetCodeProfile>>();

/**
 * Fetches full LeetCode profile from alfa-leetcode-api.
 * @see https://github.com/alfaarghya/alfa-leetcode-api
 */
export const getAlfaLeetCodeProfile = (username: string): Promise<AlfaLeetCodeProfile> => {
  const cached = profileCache.get(username);
  if (cached) {
    return cached;
  }

  const request = fetch(`${environment.leetCodeApiBaseUrl}/${encodeURIComponent(username)}/profile`)
    .then(async (response) => {
      if (!response.ok) {
        const body = await response.text();
        throw new Error(`LeetCode API error ${response.status}: ${body || response.statusText}`);
      }
      const data = await response.json() as AlfaLeetCodeProfile & { errors?: unknown[]; error?: string };
      if (data.errors?.length || data.error || typeof data.totalSolved !== 'number') {
        throw new Error('LeetCode profile data unavailable for this username');
      }
      return data;
    })
    .catch((error) => {
      profileCache.delete(username);
      throw error;
    });

  profileCache.set(username, request);
  return request;
};
