import { Router } from 'express';
import { pool } from "../db.js";

const router = Router();

router.get('/ping', async (req, res) => { // con esto nos daremos cuenta si estamos conectados a la bd
    const result = await pool.query('SELECT 1+1 AS result');
    res.json(result);
});


export default router;