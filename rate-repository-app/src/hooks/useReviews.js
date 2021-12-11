import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { data, ...result } = useQuery(GET_REVIEWS, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  return { reviews: data ? data.repository : undefined, ...result };
};

export default useReviews;
