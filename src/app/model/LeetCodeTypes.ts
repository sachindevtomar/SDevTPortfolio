export interface AllQuestionsCountNode {
    difficulty: "All" | "Easy" | "Medium" | "Hard";
    count: number;
  }
  
  export interface SubmissionCountNode extends AllQuestionsCountNode {
    submissions: number;
  }
  
  export interface IGetSubmissionStats {
    allQuestionsCount: AllQuestionsCountNode[];
    matchedUser: {
      submitStats: {
        totalSubmissionNum: SubmissionCountNode[];
      };
      profile: {
        ranking: number;
        reputation: number;
        starRating: number;
        userAvatar: string;
      }
    };
  }
  
  export type Theme = "light" | "dark" | "midnight";

  export interface IGetRecentSubmissionList{
    recentSubmissionList: RecentSubmission[];
  }

  export interface RecentSubmission{
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  }