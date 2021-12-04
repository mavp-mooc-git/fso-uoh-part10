import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const data = await mutate({variables: {username, password}});
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
