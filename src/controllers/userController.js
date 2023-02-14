// const { pool } = require("../connection/postgresql");

// const util = require('util');
// const poolQuery = util.promisify(pool.query);

// const showUsers = async (req, res) => {
//     try {
//         let query = `SELECT * FROM users`;
//         console.log(query);
//         const result = await poolQuery(query);
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.log(error);
//     }
// };


// module.exports = { showUsers };