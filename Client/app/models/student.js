import DS from 'ember-data';

var student = DS.Model.extend({
  //personal details
  //owner of the student account
  user:DS.belongsTo('user',{async:true}),
  //what active list it belongs to
  useractivestudentlist: DS.belongsTo('useractivestudentlist',{async:true}),

  //university
  university:DS.belongsTo('university',{async:true}),

  universityactivestudentlist:DS.belongsTo('universityactivestudentlist',{async:true})

})

student.reopenClass({
  FIXTURES: [
    {
      id: 1,
      useractivestudentlist:1,
      user:1,
      university:1,
      universityactivestudentlist:1

    },{
      id: 2,
      useractivestudentlist:1,
      user:2,
      university:1,
      universityactivestudentlist:1,

    },{
      id: 3,
      useractivestudentlist:1,
      user:3,
      university:1,
      universityactivestudentlist:1
    },{
      id: 4,
      useractivestudentlist:1,
      user:1,
      university:2,
      universityactivestudentlist:2
    },{
      id: 5,
      useractivestudentlist:1,
      user:1,
      university:2,
      universityactivestudentlist:2
    },{
      id: 6,
      useractivestudentlist:1,
      user:1,
      university:2,
      universityactivestudentlist:3
    }
  ]
});

export default student;
