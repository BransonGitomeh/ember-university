import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/chart-dashboard', 'Integration | Component | items/chart dashboard', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/chart-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/chart-dashboard}}
      template block text
    {{/items/chart-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
