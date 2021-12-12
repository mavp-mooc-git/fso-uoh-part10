import { /*useApolloClient,*/ useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
//import useAuthStorage from '../hooks/useAuthStorage';

const useSignUp = () => {
  //const authStorage = useAuthStorage();
  //const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const data = await mutate({variables: {username, password}});
    //await authStorage.setAccessToken(data);
    //apolloClient.resetStore();
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
