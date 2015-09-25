import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.find('user')
  },



  actions:{
    startRoute:function(){
      alert('started')
    },

    process:function(fileInfo, json){

      //Object.keys(json.Sheet1[0]).map((key) => console.log(json.Sheet1[0][key]))

      // json.Sheet1.forEach((entry) => {
      //   Object.keys(entry).map((key) => {
      //     console.log(key, entry[key]))
      //   }
      // })

      var self = this;

      try{
        console.log('started in route');
        json.Sheet1.map(function(item){


          console.log(item.name);
          console.log(item.phone);
          console.log(item.dob);

          var newuser = self.store.createRecord('user',{
            firstname:item.name,
            phonenumber:item.phone
          });

          newuser.save();

        });
        console.log(completed in route);
      }

      finally{
        console.log('done in route');
        this.transitionTo('adminhome.newStudentForm')
      }





      //trying to not be specific about the name of the sheet...FAILED Misserably

      // Object.keys(json).map(function(sheet){
      //   sheet.map(function(item){
      //     Object.keys(item).map(function(key){
      //       console.log(key, item[key]);
      //     })
      //   });
      // })

    }
  }
});
