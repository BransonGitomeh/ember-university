import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('adminhome',{path:'/'},function(){
    this.route('dashboard',{path:'/dashboard'});

    //student list views
    this.route('activestudents',function(){
      this.route('details',function(){
        this.route('profile')
        this.route('payments')
        this.route('faults')
      })
    });
    this.route('completedstudents',function(){
      this.route('details',function(){
        this.route('profile')
        this.route('payments')
        this.route('faults')
      })
    });
    this.route('issuesstudents',function(){
      this.route('details',function(){
        this.route('profile')
        this.route('payments')
        this.route('faults')
      })
    });

    //data entry forms
    this.route('newStudentForm');
    this.route('newEmployeeForm');
  });
  this.route('test');


});

export default Router;
