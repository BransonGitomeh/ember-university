import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wrappers/form-section', 'Integration | Component | wrappers/form section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wrappers/form-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wrappers/form-section}}
      template block text
    {{/wrappers/form-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
