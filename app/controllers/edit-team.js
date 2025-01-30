import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FormTeamController extends Controller {
  @service('request') request;
  @service router;

  @tracked name;
  @tracked description;

  @action
  async submitTeam(event) {
    event.preventDefault();
    if (this.teamId) {
      await this.request.fetchPut(
        'http://localhost:3000/api/Teams',
        this.teamId,
        {
          name: this.name,
          description: this.description,
        },
      );
    } else {
      await this.request.fetchPost('http://localhost:3000/api/Teams', {
        name: this.name,
        description: this.description,
      });
    }
    this.router.transitionTo('');
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateDescription(event) {
    this.description = event.target.value;
  }
}
