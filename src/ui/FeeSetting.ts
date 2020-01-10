import init from '../domain/fee/FeeSetting/FeeSettingApp';

export class FeeSetting {
  static templateUrl = '/partials/feesetting.html';
  constructor() {
    init();
  }
}
