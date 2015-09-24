import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.find('user')
  },

  actions:{
    process:function(fileInfo, json){

      //Object.keys(json.Sheet1[0]).map((key) => console.log(json.Sheet1[0][key]))

      var self = this;
      json.Sheet1.map(function(item){
        // Object.keys(item).map(function(key){
        //   console.log(key, item[key]);
        // })


        var newuser = self.store.createRecord('user',{
          firstname:item.firstname,
          middlename:item.middlename,
          lastname:item.lastname,

          gender:item.gender,
          dob:item.dob,
          nationality:item.nationality,

          idNo:item.idNo,
          residentialarea:item.residentialarea,
          phonenumber:item.phonenumber,
        });

        newuser.save();




      })


    }
  }
});
