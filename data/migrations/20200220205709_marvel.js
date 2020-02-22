
exports.up = function(knex) {
  return knex.schema.createTable('marvel', tbl => {
    tbl.increments();

    tbl.string('name', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('marvel');
};
