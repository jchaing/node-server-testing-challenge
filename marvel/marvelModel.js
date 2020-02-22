const db = require('../data/db-config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(character) {
  // the second parameter here is of other databases, SQLite returns the id by default
  const [id] = await db('marvel').insert(character, 'id');

  return db('marvel')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('marvel');
}

function findById(id) {
  return null;
}
