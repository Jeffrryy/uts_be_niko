import { DataTypes } from "sequelize";
import db from '../uttils/connection.js'
import Order from "./orderModel.js";
const Customer = db.define('Customer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'customer', 
  });

  
   

  export default Customer