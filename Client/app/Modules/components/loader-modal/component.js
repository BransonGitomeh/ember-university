import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

  }.on('didInsertElement'),

  loading:false,
  complete:false,

  actions:{
    open:function(){
      // alert('seen')
      Ember.$('#modal1').openModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        // ready: function() { alert('Ready'); }, // Callback for Modal open
        // complete: function() { alert('Closed'); } // Callback for Modal close
      });
    },
    process:function(fileInfo, json){
      //alert('called to process ' + fileInfo.name)
       this.set('loading',true)

        try{
          self = this;

          this.set('loading',true)
          this.set('complete',false)

          json.Sheet1.map(function(item){
            //item.attr now available here
            self.sendAction('read1',item,json)
          });
        }
        catch(e){
          console.log(e);
        }
        finally{
          console.log("stopped");

          this.set('loading',false)
          this.set('complete',true)
        }



    }
  }

});
