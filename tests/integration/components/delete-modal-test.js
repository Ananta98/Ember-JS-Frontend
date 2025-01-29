import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | delete-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DeleteModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DeleteModal>
        template block text
      </DeleteModal>
    `);

    assert.dom().hasText('template block text');
  });
});
