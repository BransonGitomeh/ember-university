import Ember from 'ember';

 export default Ember.TextField.extend({
   type: 'file',
   change: function(e) {
     let self = this;

     var inputFiles = e.target.files;
     if (inputFiles.length < 1) {
       return;
     }

     let inputFile = inputFiles[0];

     let fileInfo = {
       name: inputFile.name,
       type: inputFile.type || 'n/a',
       size: inputFile.size,
       date: inputFile.lastModifiedDate ? inputFile.lastModifiedDate.toLocaleDateString() : 'n/a',
     };

     var fileReader = new FileReader();

     fileReader.onload = function(e) {
       var data = e.target.result
       let fileReader = e.target;
       fileInfo.dataURL = fileReader.result;



        //var xlsx = XLSX.read(data, {type: 'binary'});
        var arr = String.fromCharCode.apply(null, new Uint8Array(data));
        var xlsx = XLSX.read(btoa(arr), {type: 'base64'});
        var json = to_json(xlsx);
        //console.log(json);

        self.sendAction('fileChanged', fileInfo, json);
     };

     function to_json(workbook) {
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
          var rObjArr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          if(rObjArr.length > 0){
            result[sheetName] = rObjArr;
          }
        });
        return result;
      }

     let firstFile = e.target.files[0];
     fileReader.readAsArrayBuffer(firstFile);
   },
 });
