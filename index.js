const { Client } = require('pg')
const environments = require('./environments');

const DB_CONFIG = {
    host     : environments.DB_HOST,
    port     : environments.DB_PORT,
    user     : environments.DB_USERNAME,
    password : environments.DB_PASSWORD,
};

const client = new Client( DB_CONFIG )

client
  .connect()
      .then(() => console.log('connected'))
      .then(() => client.query('CREATE TABLE IF NOT EXISTS clients (name TEXT NULL, type INTEGER NULL)'))
      .then(() => client.query('INSERT INTO clients(name, type) VALUES($1, $2) RETURNING *', ['Vlada', 55]))
      .then(() => client.query('SELECT * FROM clients')
          .then((result) => console.log(result.rows))
          .catch((e) => console.error(e.stack))
      )
    .then(() => client.end())
    .catch((err) => console.error('connection error', err.stack))

