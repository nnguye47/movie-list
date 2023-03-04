//this is where we will call to the model to do something
var moviesModel = require('./moviesModel.js')

module.exports = {
  get: function(req, res) {
    moviesModel.getAll(function (err, results) {
      if (err) {
        console.log('control error: ', err);
        res.sendStatus(500);
      } else {
        console.log('control results; ', results)
        res.json(results);
      }
    })
  }
};
