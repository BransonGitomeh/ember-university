import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.find('user')
  },

  actions:{
    process:function(fileInfo, json){

      //Object.keys(json.Sheet1[0]).map((key) => console.log(json.Sheet1[0][key]))

      // json.Sheet1.forEach((entry) => {
      //   Object.keys(entry).map((key) => {
      //     console.log(key, entry[key]))
      //   }
      // })


      json.Sheet1.map(function(item){
        // Object.keys(item).map(function(key){
        //   console.log(key, item[key]);
        // })

        console.log(item.name);

        if(item.name === 'branson'){
          console.log('we just cought branson');
        }

        console.log(item.phone);
        console.log(item.dob);



      })


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
