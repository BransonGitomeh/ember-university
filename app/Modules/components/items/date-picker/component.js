import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    // Pikadate datepicker
      Ember.$('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  }.on('didInsertElement')
});
