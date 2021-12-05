import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useSignOut = () => {
  const { data, error, loading } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  return { data, loading, error };
};

export default useSignOut;
