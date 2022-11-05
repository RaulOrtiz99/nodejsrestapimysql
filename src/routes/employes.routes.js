import { Router } from 'express';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employes.controller.js'

const router = Router();


router.get('/employees', getEmployees); //asi se manejan las rutas y el tema de los controladores

router.post('/employees', createEmployee);

router.put('/employees', updateEmployee);

router.delete('/employees', deleteEmployee);




export default router;