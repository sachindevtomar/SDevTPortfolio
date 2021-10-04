import { request, gql } from "graphql-request";

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

const requestHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Credentials': 'true'
  };

export const getLeetCodeRecentSubmissionList = async (
  username: any
): Promise<IGetRecentSubmissionList> =>
  await request("https://obscure-escarpment-76911.herokuapp.com/https://leetcode.com/graphql", query, { username }, requestHeaders);