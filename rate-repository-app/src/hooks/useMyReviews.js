import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useMyReviews = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(AUTHORIZED_USER, {
    variables,
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    myreviews: data?.authorizedUser,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useMyReviews;
