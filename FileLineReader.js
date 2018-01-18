const fs = require('fs');
const readline = require('readline');
const { InvalidFilenameError } = require('./Errors');

class FileLineReader {
  constructor(filename) {
    if (!filename) {
      throw new InvalidFilenameError();
    }
    this.reader = readline.createInterface({
      input: fs.createReadStream(filename)
    });
  }

  setOnLine(onLine) {
    this.reader.on('line', onLine);
  }

  setOnClose(onClose) {
    this.reader.on('close', onClose);
  }
}

module.exports = FileLineReader;
