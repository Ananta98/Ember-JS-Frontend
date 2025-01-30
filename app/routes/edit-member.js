import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MembersEditMemberRoute extends Route {
  @service('request') request;
  role;
  teamId;
  name;

  async model() {
    const memberId = this.paramsFor('edit-member.edit').member_id;
    if (memberId) {
      const result = await this.request.fetchGet(
        `http://localhost:3000/api/Members/${memberId}`,
      );
      this.role = result.role;
      this.teamId = result.teamId;
      this.name = result.name;
      return result;
    }
    const teamId = this.paramsFor('edit-member.add').team_id
    return {
      teamId
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    if (this.paramsFor('edit-member.edit').member_id) {
      controller.set('teamId', this.teamId);
      controller.set('memberId', this.paramsFor('edit-member.edit').member_id);
    } else {
      controller.set('teamId', this.paramsFor('edit-member.add').team_id);
    }
    if (this.role) {
      controller.set('role', this.role);
    } else {
      controller.set('role', 'Developer');
    }
    if (this.name) {
      controller.set('name', this.name);
    }
  }
}
