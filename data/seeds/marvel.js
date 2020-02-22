
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marvel').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('marvel').insert([
        {name: 'wolverine'},
        {name: 'ironman'},
        {name: 'thanos'},
        {name: 'spiderman'}
      ]);
    });
};
