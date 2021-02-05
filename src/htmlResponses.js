const fs = require("fs");

//dirname is a node global of whichever folder this file(in this case htmlResponses.js) is in
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, {"Content-Type": "text.html"});
  response.write(index);
  response.end();
}
const getPage2 = (request, response) => {
  response.writeHead(200, {"Content-Type": "text.html"});
  response.write(page2);
  response.end();
}

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;