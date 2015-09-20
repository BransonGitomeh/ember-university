import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    logout:function(){
      console.log('clicked2 cought');
      //  alert('loging out')
      this.sendAction('logout')
    }
  }
});
