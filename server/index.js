const express = require('express');
const movieController = require('./controllers.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));

app.get('/movies', (req, res) => {
  movieController.get(req, res)
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
