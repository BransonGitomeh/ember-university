import DS from 'ember-data';

var useractivestudentlist = DS.Model.extend({
  //personal details
  user: DS.belongsTo('user',{async:true}),

  students:DS.hasMany('student',{async:true})

})

useractivestudentlist.reopenClass({
  FIXTURES: [
    {
      id: 1,
    user: 1,
    students:[1,2,3]

    }
  ]
});

export default useractivestudentlist;
