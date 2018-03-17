const axios = require('axios');

// pure axios mlab api post request
var db = ''; // name of your database
var DB = 'https://api.mlab.com/api/1/databases/'+ db + '/collections/';
var KEY = ''; // your api key

// If Collection does not exist then when you pass in data the first time
// it gets created in the process
axios.post(DB + 'Apples' + KEY, { // Apples is an example of an name for an collection to be created or already made
  })
  .then(function (response) {
    console.log(response);
    console.log("Hello World!");
  })
  .catch(function (error) {
    console.log(error);
    console.log("Goodbye World!");
  });
