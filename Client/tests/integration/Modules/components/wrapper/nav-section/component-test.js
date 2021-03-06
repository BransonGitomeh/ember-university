import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wrapper/nav-section', 'Integration | Component | wrapper/nav section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wrapper/nav-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wrapper/nav-section}}
      template block text
    {{/wrapper/nav-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
