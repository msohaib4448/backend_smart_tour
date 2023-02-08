const { pool } = require("../connection/postgresql");

const showUsers = async (req, res) => {
    try {
        let query = await `SELECT * FROM users`;
        console.log(query);
         pool.query(query, (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).json(result.rows);
        })
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { showUsers };