import Ember from 'ember';
/* global pdfMake */

export default Ember.Component.extend({
  actions:{
    print(university){

      //university object is now available in this area...


      //you can generate a table dynamicaly under the object
      // body then merege it to the table on the fly
      //even for thousandsof objects




      // var docDefinition = {
      //   content: [
      //
      //     { text: 'Welcome to ' + university.get('name') +  ' University', style: [ 'header', 'anotherStyle' ] }
      //
      //   ],
      //
      //   styles: {
      //     header: {
      //       fontSize: 22,
      //       bold: true
      //     },
      //     anotherStyle: {
      //       italic: true,
      //       alignment: 'center'
      //     }
      //   }
      // };
      // var pdf = pdfMake.createPdf(docDefinition).open();
      // //alert('printing')
      var students = university.get('universityactivestudentlist.students')
      console.log(students);
      //get the records in a json blob
      var externalDataRetrievedFromServer = [
          { name: 'Bartek', age: 34 },
          { name: 'John', age: 27 },
          { name: 'Elizabeth', age: 30 },
      ];

      //give it an array of records,
      //and an array of json heads to use
      function buildTableBody(data, columns) {
          var body = [];
          //the new blobtype will be fixed above

          body.push(columns);
          //['name','age'] so far and will be used as the head



          data.forEach(function(row) {
              var dataRow = [];
              //convert the blob values by removing the headers id

              // {
              //   id:1,
              //   name:'branson'
              // }

              //to be {'1','branson'}

              //basic json parse

              columns.forEach(function(column) {

                  //columns are basically the json heads to read, NB not all heas are taken
                  //this can allow us to allow the user to specify collumns he needs in the
                  // document :-)

                  //dataRow.push(row[column].toString());
                  dataRow.push(row.get(column).toString());

                  //not sure about row[column] but shit works right?
                  //so now working with an ember object is kinds difrent
              })

              //[
              //{'awesome','43'},
              //{'branson','19'}
              //]

              body.push(dataRow);
          });



          return body;
      }

      function table(data, columns) {
          return {
              table: {
                  headerRows: 1,
                  body: buildTableBody(data, columns)
              }
          };
      }

      var dd = {
          content: [
              { text: 'Dynamic parts', style: 'header' },
              table(students, ['id','user.firstname','user.middlename','user.lastname','user.idNo'])
          ]
      }

      var pdf = pdfMake.createPdf(dd).open();
    }
  }
});
