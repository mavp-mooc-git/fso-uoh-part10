import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async ({ ownerName, repositoryName, rating, text }) => {
    // call the mutate function here with the right arguments
    const data = await mutate({
      variables: { ownerName, repositoryName, rating, text }
    });
    return data;
  };

  return [review, result];
};

export default useCreateReview;
