import { DataTypes } from "sequelize";
import db from '../uttils/connection.js'
import Customer from "./customerModel.js";
// import Payment from "./paymentModel.js";
const Order = db.define('Order',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    orderDate:{
        type:DataTypes.DATE,
        allowNull:false
    }

},{
    tableName:"order"
})



// Menghapus semua relasi many-to-many


export default Order;