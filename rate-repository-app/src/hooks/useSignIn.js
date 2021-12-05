import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const data = await mutate({variables: {username, password}});
    await authStorage.setAccessToken(data);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
