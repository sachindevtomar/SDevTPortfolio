import { getAlfaLeetCodeProfile } from './alfaLeetCodeApi';
import { IGetSubmissionStats } from '../model/LeetCodeTypes';

export const getLeetCodeSubmissionStats = async (
  username: string
): Promise<IGetSubmissionStats> => {
  const profile = await getAlfaLeetCodeProfile(username);

  return {
    allQuestionsCount: [
      { difficulty: 'All', count: profile.totalQuestions },
      { difficulty: 'Easy', count: profile.totalEasy },
      { difficulty: 'Medium', count: profile.totalMedium },
      { difficulty: 'Hard', count: profile.totalHard }
    ],
    matchedUser: {
      submitStats: {
        acSubmissionNum: profile.matchedUserStats?.acSubmissionNum ?? [],
        totalSubmissionNum: profile.matchedUserStats?.totalSubmissionNum
          ?? profile.totalSubmissions
          ?? []
      },
      profile: {
        ranking: profile.ranking,
        reputation: profile.reputation,
        starRating: 0,
        userAvatar: ''
      }
    }
  };
};
