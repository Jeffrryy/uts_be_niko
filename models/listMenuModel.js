import { DataTypes } from "sequelize";
import db from '../uttils/connection.js'

const ListMenu = db.define('ListMenu',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    details:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default ListMenu