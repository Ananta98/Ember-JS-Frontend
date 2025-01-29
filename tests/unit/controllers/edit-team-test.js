import { module, test } from 'qunit';
import { setupTest } from 'ember-frontend/tests/helpers';

module('Unit | Controller | edit-team', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:edit-team');
    assert.ok(controller);
  });
});
