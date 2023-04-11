const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: 'postgres://express_rest_api_db_user:zRgyR190ullwbWtmJvwq8zwdg5lue1WY@dpg-cgqjl2m4dad5es18mrk0-a/express_rest_api_db',
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = db;
