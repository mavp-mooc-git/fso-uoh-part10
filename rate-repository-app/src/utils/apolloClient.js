import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

// You might need to change this depending on how you have configured the Apollo Server's URI
const { apollo_uri } = Constants.manifest.extra;

const httpLink = createHttpLink({
  uri: apollo_uri,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken.data.authorize.accessToken ?
                         `Bearer ${accessToken.data.authorize.accessToken}` : '',
        },
      };
    } catch (e) {
      //console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
