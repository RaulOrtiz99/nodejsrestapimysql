import { Router } from 'express';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employes.controller.js'

const router = Router();


router.get('/employees', getEmployees); //asi se manejan las rutas y el tema de los controladores

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

router.put('/employees', updateEmployee);

router.delete('/employees/:id', deleteEmployee);




export default router;