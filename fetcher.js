const request = require('request');
const fs = require('fs');
const { Buffer } = require('safe-buffer');

request(process.argv[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.open(process.argv[3], 'w', function(err, fd) {
  let writeBuffer = new Buffer(process.argv[2]);
  fs.write(fd, writeBuffer, 0, writeBuffer.length, 0, function(err, writtern, buffer) {
    console.log(`Downloaded and saved ${writtern} bytes to ${process.argv[3]}`);
  });
});