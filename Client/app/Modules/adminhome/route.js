import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    viewprofile:function(){
      alert('viewprofile on ittem');
      this.sendAction('viewprofile')
    },
    viewsettings:function(){
      alert('viewsettings on ittem');
      this.sendAction('viewsettings')
    },
    viewhelp:function(){
      alert('viewhelp on ittem');
      this.sendAction('viewhelp')
    },
    locksession:function(){
      alert('locksession on ittem');
      this.sendAction('locksession')
    },
    logout:function(){
      alert('logout on ittem');
      this.sendAction('logout')
    }
  }
});
