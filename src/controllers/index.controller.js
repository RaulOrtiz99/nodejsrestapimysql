import { pool } from '../db.js';



export const pong = async (req, res) => { // con esto nos daremos cuenta si estamos conectados a la bd
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
}
