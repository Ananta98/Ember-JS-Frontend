import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamsEditTeamsRoute extends Route {
  @service('request') request;

  teamName;
  teamDescription;

  async model() {
    const teamId = this.paramsFor('edit-team.team').team_id;
    if (teamId) {
      const result = await this.request.fetchGet(
        `http://localhost:3000/api/Teams/${teamId}`,
      );
      this.teamName = result.name
      this.teamDescription = result.description
      return result;
    }
    return {};
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('teamId', this.paramsFor('edit-team.team').team_id);
    controller.set('name', this.teamName);
    controller.set('description', this.teamDescription);
  }
}
