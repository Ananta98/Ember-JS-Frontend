import { module, test } from 'qunit';
import { setupTest } from 'ember-frontend/tests/helpers';

module('Unit | Route | details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:details');
    assert.ok(route);
  });
});
