const fs = require('fs');
const readline = require('readline');
const InvalidClassInitialisationError = require('./InvalidClassInitialisationError');

class FileLineReader {
  constructor(filename) {
    if (!filename) {
      throw new InvalidClassInitialisationError();
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
