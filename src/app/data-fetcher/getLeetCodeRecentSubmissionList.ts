import { getAlfaLeetCodeProfile } from './alfaLeetCodeApi';
import { IGetRecentSubmissionList } from '../model/LeetCodeTypes';

export const getLeetCodeRecentSubmissionList = async (
  username: string
): Promise<IGetRecentSubmissionList> => {
  const profile = await getAlfaLeetCodeProfile(username);

  return {
    recentSubmissionList: profile.recentSubmissions ?? []
  };
};
