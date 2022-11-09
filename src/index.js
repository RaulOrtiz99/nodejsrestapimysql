import express from "express"; // TODO ASI SE IMPORTA EXPRESS
import employeesRoutes from './routes/employes.routes.js';
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.listen(3000);

//ESTO ES PARA LEER UN JSON 
app.use(express.json());

//TODO: ROUTES 
app.use('/api', employeesRoutes);
app.use(indexRoutes);




console.log("Server on port 3000");