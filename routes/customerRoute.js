import express from "express"
import { getAllCustomers, getCustomerById,updateCustomer,deleteCustomer} from "../controller/customerController.js"
import { verifyToken } from "../middleware/authMiddleware.js"
const customerRoute = express.Router();

// customerRoute.post('/customer/create', createCustomer)
customerRoute.get('/customer/findall', verifyToken, getAllCustomers)
customerRoute.get('/customer/findbyid/:id',verifyToken, getCustomerById)
customerRoute.put('/customer/update/:id', updateCustomer)
customerRoute.delete('/customer/delete/:id', deleteCustomer)

export default customerRoute;