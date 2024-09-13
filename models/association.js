import db from "../uttils/connection.js";
import Customer from "./customerModel.js";
import FoodItem from "./foodItemModel.js";
import Order from "./orderModel.js";
import Payment from "./paymentModel.js";
import ListMenu from "./listMenuModel.js";


// Relasi antara Customer dan Order (One-to-Many)
// Satu Customer dapat memiliki banyak Order
Customer.hasMany(Order, {
    foreignKey: 'customerId',
    as: 'order',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// Setiap Order dimiliki oleh satu Customer
Order.belongsTo(Customer, {
    foreignKey: 'customerId',
    as: 'customer',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



// Relasi antara Order dan Payment (One-to-One)
// Setiap Order memiliki satu Payment
Order.belongsTo(Payment, {
    foreignKey: 'paymentId',
    as: 'payment',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// Satu Payment terkait dengan satu Order
Payment.hasOne(Order, {
    foreignKey: 'paymentId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// Relasi antara ListMenu dan Order (One-to-One)
// Setiap ListMenu memiliki satu Order
ListMenu.hasOne(Order,{
    foreignKey:'listMenuId',
  
})

Order.belongsTo(ListMenu,{
    foreignKey:'listMenuId',
})

FoodItem.hasMany(ListMenu,{
    foreignKey:'foodItemId',
})

ListMenu.belongsTo(FoodItem,{
    foreignKey:'foodItemId',
})



