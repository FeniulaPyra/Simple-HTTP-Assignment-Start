const media = require('fs');

const meme = media.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMeme = (request, response) => {
  response.writeHead(200, {"Content-Type": "image/png"});
  response.write(meme);
  response.end();
};

module.exports.getDankMeme = getDankMeme;
module.exports.meme = meme;