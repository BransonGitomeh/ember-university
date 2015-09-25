import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'table',
  // classNames: ['display'],
  // initDataTable: function() {
  //
  //   this.$().dataTable({});
  //
  // }.on('didInsertElement'),

  actions:{
    start:function(){
        this.sendAction('started')
    },

    process:function(fileInfo, json){

      this.sendAction('process',fileInfo, json);

    },

    finish:function(){
      this.sendAction('finnished')
    }
  }

});
