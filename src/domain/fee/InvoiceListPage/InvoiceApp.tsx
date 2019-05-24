import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createGraphQLClient } from "../../../createGraphQLClient";
import InvoiceListPage from "./InvoiceListPage";
import SearchInvoicePage from "./SearchInvoicePage";
import '../../../css/dark.css';

const graphQLClient = createGraphQLClient();

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/plugins/ems-fee/page/invoice" component={InvoiceListPage} />
            <Route path="/plugins/ems-fee/page/searchinvoice" component={SearchInvoicePage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById("mountInvoiceList"));
  }, 100);
}
