import { createPool } from 'mysql2/promise';
//con este fichero me conecto a la base de datos

export const pool = createPool({ //este es como el create connection 
    host: 'localhost',
    user: 'root',
    password: 'namaste1234',
    port: 3306,
    database: 'companydb'

})