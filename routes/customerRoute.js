import express from "express"
import { createCustomer , getAllCustomers, getCustomerById,updateCustomer,deleteCustomer} from "../controller/customerController.js"
const customerRoute = express.Router();

customerRoute.post('/customer/create', createCustomer)
customerRoute.get('/customer/find', getAllCustomers)
customerRoute.get('/customer/findbyid/:id',getCustomerById)
customerRoute.put('/customer/update/:id', updateCustomer)
customerRoute.delete('/customer/delete/:id', deleteCustomer)

export default customerRoute;