const request = require('request');

let breed = process.argv.slice(2);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, (error, response, body) => {
  if (error) {
    console.log('There was an error:', error);
  }
  const data = JSON.parse(body);
  if (breed) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found!');
  }
});

