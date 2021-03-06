import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wrappers/dropdown-wrapper', 'Integration | Component | wrappers/dropdown wrapper', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wrappers/dropdown-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wrappers/dropdown-wrapper}}
      template block text
    {{/wrappers/dropdown-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
