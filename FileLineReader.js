const fs = require('fs');
const readline = require('readline');

class FileLineReader {
  constructor(filename) {
    this.reader = readline.createInterface({
      input: fs.createReadStream(filename)
    });
  }

  setOnLine(onLine) {
    this.reader.on('line', onLine);
  }

  setOnclose(onClose) {
    this.reader.on('close', onClose);
  }
}

module.exports = FileLineReader;
