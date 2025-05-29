'use strict';

const fs = require('fs');

function copy() {
  const [fileName, fileCopy] = process.argv.slice(2);

  if (!fileName || !fileCopy) {
    console.error('Need more arguments');
  }

  if (fileName === fileCopy) {
    console.error('Source and destination are the same');
  }

  let data;

  try {
    data = fs.readFileSync(fileName, 'utf8');
  } catch (err) {
    console.error(err);
  }

  try {
    fs.writeFileSync(fileCopy, data);
  } catch (err) {
    console.error(err);
  }
}

copy();

module.exports = { copy };
