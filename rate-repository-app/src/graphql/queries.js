import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

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
    $orderDirection: OrderDirection,
    $orderBy: AllRepositoriesOrderBy,
    $searchKeyword: String) {
    repositories(
      orderDirection: $orderDirection,
      orderBy: $orderBy,
      searchKeyword: $searchKeyword) {
      edges {
        node {
          ...repositoryDetails
        }
      }
    }
  }

  ${REPOSITORY_DETAILS}
`;

export const GET_REVIEWS = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

// other queries...
