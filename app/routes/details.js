import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DetailsRoute extends Route {
  @service('request') request;

  async model(params) {
    const { team_id } = params;

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
}
