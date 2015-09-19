import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('widgets/admin-sidenav-card', 'Integration | Component | widgets/user nav card', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{widgets/admin-sidenav-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#widgets/admin-sidenav-card}}
      template block text
    {{/widgets/admin-sidenav-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
