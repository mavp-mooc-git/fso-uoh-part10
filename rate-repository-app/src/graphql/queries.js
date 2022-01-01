import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REVIEWS_DETAILS } from './fragments';

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      ...repositoryDetails
      url
    }
  }

  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORIES = gql`
  query repositories(
    $first: Int,
    $after: String,
    $orderDirection: OrderDirection,
    $orderBy: AllRepositoriesOrderBy,
    $searchKeyword: String) {
    repositories(
      first: $first,
      after: $after,
      orderDirection: $orderDirection,
      orderBy: $orderBy,
      searchKeyword: $searchKeyword) {
      totalCount
      edges {
        node {
          ...repositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }

  ${REPOSITORY_DETAILS}
`;

export const GET_REVIEWS = gql`
  query repository(
    $id: ID!,
    $first: Int,
    $after: String
    ) {
    repository(id: $id) {
      id
      fullName
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            ...reviewsDetails
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }

  ${REVIEWS_DETAILS}
`;

export const AUTHORIZED_USER = gql`
  query getAuthorizedUser(
    $first: Int,
    $after: String,
    $includeReviews: Boolean = false
  ) {
    authorizedUser {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            id
            repositoryId
            rating
            createdAt
            text
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

// other queries...

