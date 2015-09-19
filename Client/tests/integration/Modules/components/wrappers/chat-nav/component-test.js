import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wrappers/chat-nav', 'Integration | Component | wrappers/chat nav', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wrappers/chat-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wrappers/chat-nav}}
      template block text
    {{/wrappers/chat-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
