const fs = require('fs');
const mockWrite = jest.fn();
const run = require('../run');

fs.createWriteStream = () => ({
  write: mockWrite
})

describe('run', () => {
  it('filters and sorts customers by distance', done => {
    setTimeout(() => {
      expect(mockWrite.mock.calls.length).toEqual(16);
      expect(mockWrite.mock.calls[0]).toEqual(['id: 4, name: Ian Kehoe\n']);
      expect(mockWrite.mock.calls[15]).toEqual(['id: 39, name: Lisa Ahearn\n']);
      done();
    }, 10);
  });
});
