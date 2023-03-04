const axios = require('axios');

//make a post request

var request = function(resType, movie) {
  if (resType === 'get') {
    axios({
      method: 'get',
      url: 'server/index.js'
    })
  }

  if (resType === 'post') {
    acios({
      method: 'post',
      url: 'server/index.js'
      params: {title: movieTitle}
    })
  }
}

export default = request;