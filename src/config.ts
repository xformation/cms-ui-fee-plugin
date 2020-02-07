const secSrvUrl = 'http://localhost:8094';
const apiUrl = 'http://localhost:8080/api';

const graphqlUrl = 'http://localhost:8080';
const loggedInUserUrl = 'http://localhost:3000';
const webSockWithCmsBackendUrl = 'ws://localhost:4000/websocket/tracker/websocket';

export const config = {
  GRAPHQL_URL: graphqlUrl + '/graphql',
  LOGGED_IN_USER_URL: loggedInUserUrl + '/api/user',
  WEB_SOCKET_URL_WITH_CMS_BACKEND: webSockWithCmsBackendUrl,
};
