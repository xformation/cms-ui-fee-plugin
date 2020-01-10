import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { gQLClient } from '../../graphQLClient';
import FeesTab from './FeesTab';
// import '../../../css/custom.css';
import '../../css/dark.css';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <ApolloProvider client={gQLClient}>
        <FeesTab />
      </ApolloProvider>,
      document.getElementById('mountFeesTab')
    );
  }, 10);
}
