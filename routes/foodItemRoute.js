import express from 'express';
import { createFoodItem,deleteFoodItem,getAllFoodItems,getFoodItemsById } from '../controller/foodItemController.js';
const foodItemsRoute =  express.Router()

foodItemsRoute.get('/food/findall',getAllFoodItems)
foodItemsRoute.get('/food/findbyid/:id',getFoodItemsById)
foodItemsRoute.delete('/food/delete/:id',deleteFoodItem)
foodItemsRoute.post('/food/create',createFoodItem)

export default foodItemsRoute;