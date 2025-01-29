import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('request') request;

  async model() {
    return await this.request.fetchGet('http://localhost:3000/api/Teams');
  }
}
