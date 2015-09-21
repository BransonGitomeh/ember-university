import DS from 'ember-data';

var university = DS.Model.extend({
  //personal details
  name: DS.attr('string'),
  innitials: DS.attr('string'),
  specialisation: DS.attr('string'),
  startedyear: DS.attr('string'),
  description: DS.attr('string'),

  //owner
  user: DS.belongsTo('user',{async:true}),

  //students
  students:DS.hasMany('student',{async:true})
})

university.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Sabek University',
      innitials:'SU',
      specialisation :'Bussness consulting',
      startedyear: '1997',
      description: 'an awesome university that was done blablablabla',
      user:1,
      students:[1,2,3]
    },
    {
      id: 2,
      name: 'Premeer Collage',
      innitials:'PUC',
      specialisation :'ECD training for young teachers',
      startedyear: '2010',
      description: 'an awesome university that was done blablablabla',
      user:1,
      students:[4,5,6]
    },

  ]
});

export default university;
