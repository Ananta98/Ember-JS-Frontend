import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormMemberController extends Controller {
  @service('request') request;
  @service router;

  @tracked name;
  @tracked role;

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateRole(event) {
    this.role = event.target.value;
  }

  @action
  async submitMember(event) {
    event.preventDefault();
    if (this.name === '' || this.role === '') {
      return;
    }
    if (this.memberId) {
      await this.request.fetchPut(
        `http://localhost:3000/api/Members/`, this.memberId,
        {
          name: this.name,
          role: this.role,
          teamId: this.teamId,
        },
      );
    } else {
      await this.request.fetchPost('http://localhost:3000/api/Members', {
        name: this.name,
        role: this.role,
        teamId: this.teamId,
      });
    }
    this.router.transitionTo('details', this.teamId);
  }
}
