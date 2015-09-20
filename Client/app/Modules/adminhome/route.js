import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    viewprofile:function(){
      alert('sending user to view profile');
    },
    viewsettings:function(){
      alert('sending user to view settings');
    },
    viewhelp:function(){
      alert('sending user to view help @zendesk');
    },
    locksession:function(){
      alert('Locking down users account..not logging out');
    },
    logout:function(){
      alert('logging user out and deleting all held data');
    }
  }
});
