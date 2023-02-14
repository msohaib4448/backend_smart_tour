const { pool } = require("../../connection/postgresql");

const showHotels = (req, res) => {
    let query = `SELECT * 
    FROM hotels 
    JOIN rooms ON hotels.id = rooms.id`;
    // let query = `SELECT * 
    // FROM hotels`;
    console.log(query);
    pool.query(query, (error, result) => {
        if (error) {
            throw error
        }
        console.log("result.rows",result.rows)
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
    const { name, rating, location, hotel_description } = req.body;
    console.log(req);
    console.log(name, rating, location, hotel_description);
    const query = `INSERT INTO hotels (name, rating, location, hotel_description) VALUES ('${name}', '${rating}', '${location}', '${hotel_description}') `;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

const updateHotel = (req, res) => {
    const { id, name, rating, location, hotel_description } = req.body;
    console.log(id, name, rating, location, hotel_description);
    const query = `UPDATE hotels SET (name, rating, location, hotel_description) = ('${name}', '${rating}', '${location}', '${hotel_description}') WHERE id = '${id}'`;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

const deleteHotel = (req, res) => {
    // const { id, msg } = req;
    const { id } = req.params;
    console.log(id);
    // console.log(id);
    const query = `DELETE FROM hotels WHERE id = ${id}`;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

module.exports = { showHotels, showHotel, addHotel, updateHotel, deleteHotel };