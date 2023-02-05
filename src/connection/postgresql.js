const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'smart_tour',
  password: 'postgre0308',
  port: 5432,
})
module.exports = { pool };