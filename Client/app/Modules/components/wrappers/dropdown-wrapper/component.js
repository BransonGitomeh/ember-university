import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('.dropdown-button').dropdown({
       inDuration: 300,
       outDuration: 125,
       constrain_width: true, // Does not change width of dropdown to that of the activator
       hover: false, // Activate on click
       alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
       gutter: 0, // Spacing from edge
       belowOrigin: true // Displays dropdown below the button
     });
 }.on('didInsertElement')
});
