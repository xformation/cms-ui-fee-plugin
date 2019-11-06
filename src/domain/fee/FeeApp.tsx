import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { gQLClient } from '..//../graphQLClient';
// import InvoiceListPage from './InvoiceListPage';


export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <ApolloProvider client={gQLClient}>
        {/* <FeeSetup /> */}
      </ApolloProvider>,
      document.getElementById('mountFeeInvoiceTab')
    );
  }, 10);
}
