import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.find('user')
  },
  actions:{
    fileChanged:function(fileInfo){
      alert('got the file' + fileInfo.name)
    }
  }
});
