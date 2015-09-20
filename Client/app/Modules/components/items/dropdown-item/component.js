import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  click: function() {
    this.sendAction('clicked');
  },
  actions:{
    clicked:function(){
      console.log('clicked 1 cought');
      this.sendAction('clicked');
    }
  }
});
