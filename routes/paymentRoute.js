import express from 'express';
import { getPaymentById,createPayment,deletePayment,getAllPayments } from '../controller/paymentController.js';
const payment = express.Router()

payment.get('/payment/findbyid/:id', getPaymentById);
payment.get('/payment/findall',getAllPayments)
payment.post('/payment/create',createPayment)
payment.delete('/payment/delete',deletePayment)

export default payment;  

