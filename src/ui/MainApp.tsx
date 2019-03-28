import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createGraphQLClient } from '../createGraphQLClient';
import InvoicePage from '../domain/fee/Invoice';

const graphQLClient = createGraphQLClient();

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Switch>
            <Route component={InvoicePage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('mount')
    );
  }, 1000);
}
