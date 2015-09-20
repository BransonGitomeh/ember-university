import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    logout:function(){
      console.log('final stage of buble up');
      alert('finally logging out')
    }
  }
});
