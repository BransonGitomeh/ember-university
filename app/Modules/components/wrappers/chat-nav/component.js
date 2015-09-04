import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    // Perfect Scrollbar
    $('select').not('.disabled').material_select();

    //for rightside-navigation for chat
    var righttnav = $("#chat-out").height();
    $('.rightside-navigation').height(righttnav).perfectScrollbar({
    suppressScrollX: true
    });

 }.on('didInsertElement')
});
