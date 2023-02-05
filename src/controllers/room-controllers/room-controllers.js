const { pool } = require("../../connection/postgresql");

const showRooms = (req, res) => {
    let query = `SELECT * FROM rooms`;
    console.log(query);
    pool.query(query, (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows);
    })
}

const showRoom = (req, res) => {
    const { id } = req.params;
    let query = `SELECT * FROM rooms WHERE id='${id}'`;
    console.log(query);
    pool.query(query, (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows);
    })
    console.log(id);
}

const addRoom = (req, res) => {
    const { room_number, hotel_id, category_id, description, price } = req.body;
    console.log(room_number, hotel_id, category_id, description, price);
    const query = `INSERT INTO rooms (room_number, hotel_id, category_id, description, price ) VALUES ('${room_number}', '${hotel_id}', '${category_id}', '${description}', '${price}') `;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

const updateRoom = (req, res) => {
    const { id, room_number, hotel_id, category_id, description, price } = req.body;
    console.log(id, room_number, hotel_id, category_id, description, price);
    const query = `UPDATE rooms SET (room_number, hotel_id, category_id, description, price) = ('${room_number}', '${hotel_id}', '${category_id}', '${description}', '${price}') WHERE id = '${id}'`;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

const deleteRoom = (req, res) => {
    const { id } = req.body;
    console.log(id);
    const query = `DELETE FROM rooms WHERE id = '${id}'`;
    pool.query(query, (error, result) => {
        console.log(query);
        if (error) {
            throw error
        }
        res.status(200).json(req.body)
    })
}

module.exports = { showRooms, showRoom, addRoom, updateRoom, deleteRoom };