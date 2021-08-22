const request = require('request');
const fs = require('fs');

// take in command line arguments
// process.argv - converts data entered into an array
// slice removes node fetcher.js portion, array index 0 of passed
const website = process.argv.slice(2)[0];
const filename = process.argv.slice(3)[0];

// request format lists 3 portions
request(website, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  // used to write the output file
  // writeFile(file, data, options, callback function that returns if there is err)
  fs.writeFile(filename, body, 'utf8', (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Successful`)
      // statSync shows the file properties .size specifically
      const filesize = fs.statSync(filename).size
      console.log(`Downloaded and saved ${filesize} bytes to ${filename}`)
    }
  })
});