import init from '../domain/fee/FeesTabApp';

export class FeesTab {
  static templateUrl = '/partials/feestab.html';
  constructor() {
    init();
  }
}
