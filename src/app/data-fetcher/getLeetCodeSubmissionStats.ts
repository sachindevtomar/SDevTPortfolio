import { GraphQLClient, gql } from "graphql-request";

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
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        reputation
        starRating
        userAvatar
      }
    }
  }`;

const client = new GraphQLClient(
  "https://obscure-escarpment-76911.herokuapp.com/https://leetcode.com/graphql",
  {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }
  }
);

export const getLeetCodeSubmissionStats = async (
  username: string
): Promise<IGetSubmissionStats> =>
  await client.request<IGetSubmissionStats>(query, { username });
