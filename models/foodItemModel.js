import { DataTypes } from "sequelize";
import db from '../uttils/connection.js'
// import Payment from "./paymentModel.js";
import Order from "./orderModel.js";
const FoodItem = db.define('FoodItem',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    itemName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    tableName:"foodItem"
})


export default FoodItem