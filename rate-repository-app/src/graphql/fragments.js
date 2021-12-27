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

export const REVIEWS_DETAILS = gql`
  fragment reviewsDetails on Review {
    id
    repositoryId
    rating
    createdAt
    text
  }
`;


