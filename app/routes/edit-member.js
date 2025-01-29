import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MembersEditMemberRoute extends Route {
  @service('request') request;

  async model() {
    const memberId = this.paramsFor('edit-member.member').member_id;
    if (memberId) {
      const result = await this.request.fetchGet(
        `http://localhost:3000/api/Members/${memberId}`,
      );
      return result;
    }
    return {};
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('memberId', this.paramsFor('edit-member.member').member_id);
  }
}
