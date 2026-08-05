export interface AllQuestionsCountNode {
  difficulty: 'All' | 'Easy' | 'Medium' | 'Hard';
  count: number;
}

export interface SubmissionCountNode extends AllQuestionsCountNode {
  submissions: number;
}

export interface IGetSubmissionStats {
  allQuestionsCount: AllQuestionsCountNode[];
  matchedUser: {
    submitStats: {
      acSubmissionNum: SubmissionCountNode[];
      totalSubmissionNum: SubmissionCountNode[];
    };
    profile: {
      ranking: number;
      reputation: number;
      starRating: number;
      userAvatar: string;
    };
  };
}

export type Theme = 'light' | 'dark' | 'midnight';

export interface IGetRecentSubmissionList {
  recentSubmissionList: RecentSubmission[];
}

export interface RecentSubmission {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
}

/** Response from alfa-leetcode-api `/:username/profile` */
export interface AlfaLeetCodeProfile {
  totalSolved: number;
  totalSubmissions: SubmissionCountNode[];
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoint: number;
  reputation: number;
  submissionCalendar: Record<string, number>;
  recentSubmissions: RecentSubmission[];
  matchedUserStats: {
    acSubmissionNum: SubmissionCountNode[];
    totalSubmissionNum: SubmissionCountNode[];
  };
}
