const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'smart_tour',
<<<<<<< HEAD
  password: '5432',
=======
  password: '123',
>>>>>>> f6261fa9ea5c2f4b4a3cd720791f4daebc9bb670
  port: 5432,
})



module.exports = { pool };