const { pool } = require("../../connection/postgresql");

const showHotels = (req, res) => {
    let query = `SELECT * FROM hotels`;
    console.log(query);
    pool.query(query, (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows);
    })
}




const showHotel = (req, res) => {
    const { id } = req.params;
    let query = `SELECT * FROM hotels WHERE id='${id}'`;
    console.log(query);
    pool.query(query, (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows);
    })
    console.log(id);
}


const addHotel = (req, res) => {
    const { name, rating, location, description } = req.body;
    console.log(name, rating, location, description);
    const query = `INSERT INTO hotels (name, rating, location, description) VALUES ('${name}', '${rating}', '${location}', '${description}') `;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

const updateHotel = (req, res) => {
    const { id, name, rating, location, description } = req.body;
    console.log(id, name, rating, location, description);
    const query = `UPDATE hotels SET (name, rating, location, description) = ('${name}', '${rating}', '${location}', '${description}') WHERE id = '${id}'`;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

const deleteHotel = (req, res) => {
    const { id } = req.body;
    console.log(id);
    const query = `DELETE FROM hotels WHERE id = '${id}'`;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

module.exports = { showHotels, showHotel, addHotel, updateHotel, deleteHotel};