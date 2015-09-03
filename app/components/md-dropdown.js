import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
      $('.dropdown-button').dropdown({
          // Displays dropdown below the button
        }
      );
 }.on('didInsertElement')

});
