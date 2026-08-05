import { GraphQLClient, gql } from "graphql-request";

import { IGetRecentSubmissionList } from "../model/LeetCodeTypes";

const query = gql`
query getRecentSubmissionList($username: String!, $limit: Int) {
    recentSubmissionList(username: $username, limit: $limit) {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
        __typename
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

export const getLeetCodeRecentSubmissionList = async (
  username: string
): Promise<IGetRecentSubmissionList> =>
  await client.request<IGetRecentSubmissionList>(query, { username });
