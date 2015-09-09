import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: 'http://emberuni.s3.amazonaws.com/',

  filesDidChange: function(files) {
    var uploadUrl = this.get('url');

    var uploader = EmberUploader.S3Uploader.create({
      type: 'POST',
      url: uploadUrl
    });

    uploader.on('didUpload', function(response) {
      // S3 will return XML with url
      var uploadedUrl = $(response).find('Location')[0].textContent;
      uploadedUrl = decodeURIComponent(uploadedUrl); // => http://yourbucket.s3.amazonaws.com/file.png
      console.log(uploadedUrl);
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]); // Uploader will send a sign request then upload to S3
    }
  }
});
