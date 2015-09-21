/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  //Imports for perfect-scrollbar
  app.import('bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css')
  app.import('bower_components/perfect-scrollbar/js/perfect-scrollbar.js')
  app.import('bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.js')
  app.import('bower_components/ember-uploader/dist/ember-uploader.min.js')

  //pdf stuff
  app.import('bower_components/pdfmake/build/pdfmake.min.js')
  app.import('bower_components/pdfmake/build/vfs_fonts.js')


  return app.toTree();
};
