import Ember from 'ember';

export default Ember.Route.extend({
  // setupController: function(controller, model) {
  //   this._super(controller, model);
  //     controller.set("model.name", "branson");
  // },

  model:function(){
    var store = this.store;
    return Ember.RSVP.hash({
      users: store.find('user'),
      name:{
        name:'0'
      }
    })
  },

  counter:0,





  actions:{
    // process:function(fileInfo, json, model){
    //
    //   //Object.keys(json.Sheet1[0]).map((key) => console.log(json.Sheet1[0][key]))
    //
    //   // json.Sheet1.forEach((entry) => {
    //   //   Object.keys(entry).map((key) => {
    //   //     console.log(key, entry[key]))
    //   //   }
    //   // })
    //
    //   var self = this;
    //
    //   var counter = 0;
    //   json.Sheet1.map(function(item){
    //     // Object.keys(item).map(function(key){
    //     //   console.log(key, item[key]);
    //     // })
    //
    //     console.log(item.name);
    //
    //     if(item.name === 'branson'){
    //       //validation logic here for each of the attributes
    //       //errors should be pushed to an array and displayes beside each of the model **
    //       console.log('we just cought branson');
    //     }
    //
    //     // console.log(item.phone);
    //     // console.log(item.dob);
    //     counter++;
    //
    //     model.set('name',counter);
    //     console.log(counter)
    //
    //
    //
    //     var newuser = self.store.createRecord('user',{
    //       firstname:item.name,
    //       phonenumber:item.phone
    //     });
    //
    //     newuser.save();
    //
    //
    //
    //
    //   })
    //
    //
    //   //trying to not be specific about the name of the sheet...FAILED Misserably
    //
    //   // Object.keys(json).map(function(sheet){
    //   //   sheet.map(function(item){
    //   //     Object.keys(item).map(function(key){
    //   //       console.log(key, item[key]);
    //   //     })
    //   //   });
    //   // })
    //
    // }
    save:function(item,json){
      var counter = this.get('counter');
      counter++;
      this.set('counter',counter)


      console.log('cought the user ' + item.name);
      console.log(this.get("model.name.name"));

      console.log(counter);
    }
  }
});
