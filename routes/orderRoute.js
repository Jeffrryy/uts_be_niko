import express from 'express';
import { getAllOrders,getOrderById,createOrder,deleteOrder,updateOrder } from '../controller/orderController.js';
const order = express.Router();

order.get('/order/findall', getAllOrders);
order.get('/order/findbyid/:id', getOrderById);
order.delete('/order/delete/:id', deleteOrder)
order.post('/order/create', createOrder);
order.put('/order/update/:id', updateOrder);

export default order;  
