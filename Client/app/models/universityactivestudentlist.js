import DS from 'ember-data';

var universityactivestudentlist = DS.Model.extend({
  //personal details
  university: DS.belongsTo('university',{async:true}),

  students:DS.hasMany('student',{async:true}),

  Totalstudents: function() {
    var students = this.get('students');
    return students.get('length')
  }.property('students'),

})

universityactivestudentlist.reopenClass({
  FIXTURES: [
    {
      id: 1,
    university: 1,
    students:[1,2,3]

    }
  ]
});

export default universityactivestudentlist;
