import DS from 'ember-data';

var user = DS.Model.extend({
  //personal details

  firstname: DS.attr('string'),
  middlename: DS.attr('string'),
  lastname: DS.attr('string'),
  gender: DS.attr('string'),
  dob: DS.attr('string'),
  nationality: DS.attr('string'),
  idNo: DS.attr('string'),
  residentialarea: DS.attr('string'),
  phonenumber: DS.attr('string'),

  //educationalHistory

  //primarySchool
  primarySchoolName: DS.attr('string'),
  primarySchoolYearComplete: DS.attr('string'),
  primarySchoolCompleteMarks: DS.attr('string'),
  primarySchoolCompleteGrade: DS.attr('string'),

  //highSchool
  highSchoolName: DS.attr('string'),
  highSchoolYearComplete: DS.attr('string'),
  highSchoolYearGrade: DS.attr('string'),
  highSchoolCompletePoints: DS.attr('string'),

  //lists
  students:DS.hasMany('student',{async:true}),
  //students lists
  useractivestudentlist: DS.belongsTo('useractivestudentlist',{async:true}),
  userdonestudentlist: DS.attr('string'),
  userissuesstudentlist: DS.attr('string'),

  //lecturer lsists
  userparttimelecturerlist: DS.attr('string'),
  userfulltimelecturerlist: DS.attr('string'),
  userpromotionollecturerlist: DS.attr('string'),

  //login
  username: DS.attr('string'),
  password: DS.attr('string'),

  universities:DS.hasMany('university',{async:true})
})

user.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstname: 'Branson',
      middlename: 'Gitomeh',
      lastname: 'Kuria',
      gender: 'male',
      dob: '10/10/1995',
      nationality: 'kenyan',
      idNo: '11340673',
      residentialarea: 'kenyan',
      phonenumber: '0724736012',
      universities:[1,2],
      useractivestudentlist:1,
      students:[1]
    },{
      id: 2,
      firstname: 'Gideon',
      middlename: 'Maina',
      lastname: 'Kuria',
      gender: 'male',
      dob: '10/10/1995',
      nationality: 'kenyan',
      idNo: '11340673',
      residentialarea: 'kenyan',
      phonenumber: '0724736012',
      universities:[1,2],
      useractivestudentlist:1,
      students:[2]
    },{
      id: 3,
      firstname: 'Caroline',
      middlename: 'Nyambura',
      lastname: 'Kuria',
      gender: 'female',
      dob: '21 September,1995',
      nationality: 'kenyan',
      idNo: '11340673',
      residentialarea: 'Nairobi-roysambu',
      phonenumber: '0724736012',
      universities:[1,2],
      useractivestudentlist:1,
      students:[3]
    }
  ]
});

export default user;
