const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log('There was an error:', error);
    }
    const data = JSON.parse(body);
    if (breedName) {
      console.log(data[0].description);
    } else {
      console.log('Breed not found!');
    }
  });
};

module.exports = { fetchBreedDescription };