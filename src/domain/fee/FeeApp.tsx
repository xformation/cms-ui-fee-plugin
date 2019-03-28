import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createGraphQLClient } from '../../createGraphQLClient';
import FeeSetupPage from './FeeSetup';
import FeeSetting from './FeeSetting';
import InvoicePage from './Invoice';

const graphQLClient = createGraphQLClient();

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/plugins/xformation-fee-panel/page/invoice"
              component={InvoicePage}
            />
            <Route
              path="/plugins/xformation-fee-panel/page/feesetup"
              component={FeeSetupPage}
            />
            <Route
              path="/plugins/xformation-fee-panel/page/feesetting"
              component={FeeSetting}
            />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('mount')
    );
  }, 10);
}
