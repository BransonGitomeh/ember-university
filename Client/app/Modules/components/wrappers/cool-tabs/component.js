import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  didInsertElement: function() {
    $('.tab-demo').show().tabs();
    $('.tab-demo-active').show().tabs();
  }.on('didInsertElement')

});
