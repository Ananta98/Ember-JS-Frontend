import EmberRouter from '@ember/routing/router';
import config from 'ember-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('details', { path: '/details/:team_id' });
  this.route('edit-member', function () {
    this.route('edit', { path: '/member/:member_id' });
    this.route('add', { path: '/team/:team_id' });
  });
  this.route('edit-team', function () {
    this.route('team', { path: '/:team_id' });
  });
});
