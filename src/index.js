import express from "express";
import employeesRoutes from './routes/employes.routes.js';
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.listen(3000);

//TODO: ROUTES 
app.use(employeesRoutes);
app.use(indexRoutes);




console.log("Server on port 3000");