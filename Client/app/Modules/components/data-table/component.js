import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['display'],
  initDataTable: function() {

    this.$().dataTable({});

  }.on('didInsertElement'),

});
