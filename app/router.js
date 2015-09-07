import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('adminhome',{path:'/'},function(){
    this.route('dashboard');
    this.route('activestudents');
    this.route('newStudentForm');
  });
  this.route('test');


});

export default Router;
