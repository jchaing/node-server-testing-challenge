const db = require('../data/db-config.js');

// the data access file we are testing
const Marvel = require('./marvelModel.js');

describe('marvel model', () => {
  describe('insert()', () => {
    it('should insert the provided marvel character into db', async () => {
      // this code expects that the table is empty, we'll handle that below
      // add data to the test database using the data access file
      await Marvel.insert({ name: 'wolverine' });
      await Marvel.insert({ name: 'ironman' });
      await Marvel.insert({ name: 'spiderman' });

      // read data from the table
      const characters = await db('marvel');

      // verify that there are now three records inserted
      expect(characters).toHaveLength(3);
    });

    it('should return the inserted characters', async () => {
      let character = await Marvel.insert({ name: 'wolverine' });
      expect(character.name).toBe('wolverine');
      
      character = await Marvel.insert({ name: 'ironman' });
      expect(character.name).toBe('ironman');

      character = await Marvel.insert({ name: 'spiderman' });
      expect(character.name).toBe('spiderman');
      
    })
  });
});

beforeEach(async () => {
  await db('marvel').truncate();
});
