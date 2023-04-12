const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: ' internal/external database URL',
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = db;
