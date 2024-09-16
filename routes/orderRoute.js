import express from 'express';
import { getAllOrders,getOrderById,createOrder,deleteOrder,updateOrder } from '../controller/orderController.js';
const orderRoute = express.Router();

orderRoute.get('/order/findall', getAllOrders);
orderRoute.get('/order/findbyid/:id', getOrderById);
orderRoute.delete('/order/delete/:id', deleteOrder)
orderRoute.post('/order/create', createOrder);
orderRoute.put('/order/update/:id', updateOrder);

export default orderRoute;  
