import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    // Perfect Scrollbar
    Ember.$('select').not('.disabled').material_select();

    //for normal side-vav
    var leftnav = $(".page-topbar").height();

    var leftnavHeight = window.innerHeight - leftnav;

    Ember.$('.leftside-navigation').height(leftnavHeight).perfectScrollbar({
      suppressScrollX: true,
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });


 }.on('didInsertElement')
});
