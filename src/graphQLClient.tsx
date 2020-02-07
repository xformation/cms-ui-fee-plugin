import {ApolloClient, createNetworkInterface} from 'react-apollo';
import {config} from './config';

const networkInterface = createNetworkInterface({
  uri: config.GRAPHQL_URL
  //'http://100.81.3.26:8080/graphql',
  // uri: 'http://localhost:8080/graphql'
});
export const gQLClient = new ApolloClient({
  networkInterface: networkInterface,
});
