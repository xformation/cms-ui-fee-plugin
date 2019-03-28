import init from '../domain/fee/Invoice/InvoiceApp';

export class Invoice {
  static templateUrl = '/partials/invoice.html';
  constructor() {
    init();
  }
}
