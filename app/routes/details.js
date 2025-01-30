import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DetailsRoute extends Route {
  @service('request') request;
  teamId;

  async model(params) {
    const { team_id } = params;
    this.teamId = team_id;

    const membersDetails = await this.request.fetchGet(
      `http://localhost:3000/api/Teams/${team_id}/members`,
    );

    const teamDetails = await this.request.fetchGet(
      `http://localhost:3000/api/Teams/${team_id}`,
    );

    const result = {
      details: teamDetails,
      members: membersDetails,
    };

    return result;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('teamId', this.teamId);
  }
}
