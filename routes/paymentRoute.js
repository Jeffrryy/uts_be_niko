import express from 'express';
import { getPaymentById,createPayment,deletePayment,getAllPayments } from '../controller/paymentController.js';
const paymentRoute = express.Router()

paymentRoute.get('/payment/findbyid/:id', getPaymentById);
paymentRoute.get('/payment/findall',getAllPayments)
paymentRoute.post('/payment/create',createPayment)
paymentRoute.delete('/payment/delete',deletePayment)

export default paymentRoute;  

