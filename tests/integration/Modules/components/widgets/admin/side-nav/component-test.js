import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('widgets/admin/side-nav', 'Integration | Component | widgets/admin/side nav', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{widgets/admin/side-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#widgets/admin/side-nav}}
      template block text
    {{/widgets/admin/side-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
