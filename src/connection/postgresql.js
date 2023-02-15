const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'smart_tour',
<<<<<<< HEAD
  password: '5432',
=======
  password: '1289',
>>>>>>> 0fb9d7badaf748b4271d79af1c2cebbe5a2f97a9
  port: 5432,
})




module.exports = { pool };