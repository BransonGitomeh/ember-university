import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    viewprofile:function(){
      console.log('viewprofile on ittem');
      this.sendAction('viewprofile')
    },
    viewsettings:function(){
      console.log('viewsettings on ittem');
      this.sendAction('viewsettings')
    },
    viewhelp:function(){
      console.log('viewhelp on ittem');
      this.sendAction('viewhelp')
    },
    locksession:function(){
      console.log('locksession on ittem');
      this.sendAction('locksession')
    },
    logout:function(){
      console.log('logout on ittem');
      this.sendAction('logout')
    }
  }
});
