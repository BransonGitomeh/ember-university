import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    process:function(fileInfo, json){
      this.sendAction('process',fileInfo, json);
    }
  }

});
