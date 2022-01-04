import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useDeleteReview = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    // call the mutate function here with the right arguments
    const data = await mutate({
      variables: { id }
    });
    apolloClient.resetStore();
    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
