import express from 'express';
import { createFoodItem,deleteFoodItem,getAllFoodItems,getFoodItemsById } from '../controller/foodItemController.js';
const foodItems =  express.Router()

foodItems.get('/food/findall',getAllFoodItems)
foodItems.get('/food/findbyid/:id',getFoodItemsById)
foodItems.delete('/food/delete/:id',deleteFoodItem)
foodItems.post('/food/create',createFoodItem)

export default foodItems;