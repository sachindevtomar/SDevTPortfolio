import { request, gql } from "graphql-request";

import { IGetSubmissionStats } from "../model/LeetCodeTypes";

const query = gql`
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

const requestHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Credentials': 'true'
  };

export const getLeetCodeSubmissionStats = async (
  username: any
): Promise<IGetSubmissionStats> =>
  await request("https://obscure-escarpment-76911.herokuapp.com/https://leetcode.com/graphql", query, { username }, requestHeaders);