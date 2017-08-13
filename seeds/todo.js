exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function() {
      // Inserts seed entries
      const todo = [{
        title: 'First todo',
        priority: 1,
        date: new Date()
      }, {
        title: 'Second todo',
        priority: 2,
        date: new Date()
      }, {
        title: 'Third todo',
        priority: 3,
        date: new Date()
      }, {
        title: 'Fourth todo',
        priority: 4,
        date: new Date()
      }, {
        title: 'Fifth todo',
        priority: 5,
        date: new Date()
      }];

      return knex('todo').insert(todo);
    });
};
