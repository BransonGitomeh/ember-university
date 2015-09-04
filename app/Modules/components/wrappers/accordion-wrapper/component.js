import Ember from 'ember';

export default Ember.Component.extend({
  tagName="",
  didInsertElement: function() {
    Ember.$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }.on('didInsertElement')

});
