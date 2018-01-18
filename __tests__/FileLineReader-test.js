const FileLineReader = require('../FileLineReader');
const InvalidClassInitialisationError = require('../InvalidClassInitialisationError');

let mockReader = 'test reader';

jest.mock('fs');
jest.mock('readline', () => ({
  createInterface: () => mockReader
}));

describe('FileLineReader', () => {
  it('initialises with filename', () => {
    const fileLineReader = new FileLineReader('test.txt');
    expect(fileLineReader.reader).toEqual('test reader');
  });

  it('throws an initialisation error if instaniated with bad arguments', () => {
    try {
      new FileLineReader();
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidClassInitialisationError');
    }
  });

  it('sets on line callback', () => {
    const on = jest.fn();
    mockReader = { on };
    const fileLineReader = new FileLineReader('test.txt');
    fileLineReader.setOnLine('callback');
    expect(on.mock.calls.length).toEqual(1);
    expect(on.mock.calls[0]).toEqual(['line', 'callback']);
  });

  it('sets on close callback', () => {
    const on = jest.fn();
    mockReader = { on };
    const fileLineReader = new FileLineReader('test.txt');
    fileLineReader.setOnClose('callback');
    expect(on.mock.calls.length).toEqual(1);
    expect(on.mock.calls[0]).toEqual(['close', 'callback']);
  });
});
