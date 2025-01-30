import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DetailsController extends Controller {
  @service router;
  @service('request') request;

  @action
  async deleteMember(memberId, teamId) {
    await this.request.fetchDelete(
      `http://localhost:3000/api/Members`,
      memberId,
    );
    this.router.transitionTo('');  
  }
}
