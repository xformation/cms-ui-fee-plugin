import init from '../domain/fee/FeeSetup/FeesApp';

export class FeeSetup {
  static templateUrl = '/partials/feesetup.html';
  constructor() {
    init();
  }
}
