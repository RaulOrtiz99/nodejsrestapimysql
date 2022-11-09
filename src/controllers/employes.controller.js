import { pool } from "../db.js";

//estos son los controladores


export const getEmployees = async (req, res) => {// esto es para obtener todos los empleados
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
};

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
        "INSERT INTO employee (name,salary)VALUES(?,?)",
        [name, salary]
    );
    res.send({
        id: rows.insertId,
        name,
        salary,
    });
};
export const updateEmployee = (req, res) => res.send("actualizando empleados");

export const deleteEmployee = (req, res) => res.send("eliminando empleados");
