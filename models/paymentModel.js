import { DataTypes } from "sequelize";
import db from '../uttils/connection.js'
import Order from "./orderModel.js";

const Payment = db.define('Payment',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    paymentDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    paymentType:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    tableName:"payment"
})






export default Payment