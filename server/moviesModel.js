//this is where we will actually query to our database
const db = require('./db/index.js');

module.exports = {
  getAll: function(callback) {
    var qString = 'SELECT * FROM movieList';
    db.query(qString, (err, results) => {
      if (err) {
        console.log('model error: ', err);
        callback(err);
      } else {
        console.log('model results; ', results);
        callback(null, results)
      }
    })
    // callback(null, {})
  }
};