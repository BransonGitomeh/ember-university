import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    sendPrint:function(university){
      console.log(this.get('university.name'));
      this.sendAction('print',university)
    }
  }
});
