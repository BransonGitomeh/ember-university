import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    // Perfect Scrollbar
    Ember.$('select').not('.disabled').material_select();

    //for rightside-navigation for chat
    var righttnav = Ember.$("#chat-out").height();
    Ember.$('.rightside-navigation').height(righttnav).perfectScrollbar({
    suppressScrollX: true
    });

 }.on('didInsertElement')
});
