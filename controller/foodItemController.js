import FoodItem from "../models/foodItemModel.js";

export const createFoodItem = async (req,res) => {
        const {itemName, price} = req.body
        try{
            const foodItem = await FoodItem.create({
                itemName: itemName,
                price: price
            })
            res.status(201).json(foodItem)
        } catch(err){
            res.status(500).json({error:err, message:"Couldn't create"})
        }
}

export const getAllFoodItems = async (req, res) => {
    try{
        const foodItems = await FoodItem.findAll()
        res.status(200).json(foodItems)
    } catch(err){
        res.status(500).json({error:err,message:"Couldn't find any food items"})
    }
}

export const getFoodItemsById = async (req,res) => {
    const {id} =req.params
    try{
       const foodItem= await FoodItem.findByPk(id);
       if(foodItem){
           res.status(200).json(foodItem)
       } else {
           res.status(404).json({message: "customer not found"})
       }
       
    } catch(err) {
       res.status(500).json({message:"error fetching customer" , error: err})
    }
}

export const deleteFoodItem = async (req, res) => {
    const { id } = req.params;
    try {
      const foodItem = await FoodItem.findByPk(id);
      if (foodItem) {
        await foodItem.destroy();
        res.status(200).json({ message: "foodItem deleted successfully" });
      } else {
        res.status(404).json({ message: "foodItem not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting food", error });
    }
}