import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

