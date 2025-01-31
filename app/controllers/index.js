import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service('request') request;
  @service router;

  @action
  async deleteTeam(teamId) {
    await this.request.fetchDelete(`http://localhost:3000/api/Teams`, teamId);
    window.location.reload();
  }
}
