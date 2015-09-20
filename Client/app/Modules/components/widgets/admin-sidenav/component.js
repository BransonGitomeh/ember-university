import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    logUserOut:function(){
      console.log('clicked3 cought');
      //alert('loging out')
      this.sendAction('logout')
    }
  }


});
