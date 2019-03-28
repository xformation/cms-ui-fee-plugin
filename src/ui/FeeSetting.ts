import init from '../domain/fee/FeeSetting/FeesApp';

export class FeeSetting {
  static templateUrl = '/partials/feesetting.html';
  constructor() {
    init();
  }
}
