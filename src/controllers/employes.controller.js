import { pool } from "../db.js";

//estos son los controladores

export const deleteEmployee = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employee WHERE id= ?", [
    req.params.id,
  ]);
  console.log(result);

  if (result.affectedRows <= 0) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  res.sendStatus(204);
};

export const getEmployees = async (req, res) => {
  // esto es para obtener todos los empleados
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

export const getEmployee = async (req, res) => {
  console.log(req.params.id); //esto es para obtener un id en especifico
  const [rows] = await pool.query("SELECT * FROM employee WHERE id =?", [
    req.params.id,
  ]);
  //res.send(rows); esto es para enviar todo el json completo
  if (rows.length <= 0)
    return res.status(404).json({
      // esto es para el manejo de errores es decir que pasa si no se encuentra el empleado por el id
      message: "Employee not found",
    });
  res.json(rows[0]);
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
