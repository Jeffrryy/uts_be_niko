import Customer from "../models/customerModel.js";
import FoodItem from "../models/foodItemModel.js";
import Order from "../models/orderModel.js";
import Payment from "../models/paymentModel.js";
import ListMenu from "../models/listMenuModel.js";
import bcrypt from "bcrypt"
import "../models/index.js"
// Create
const createSeeder = async () => {
    const customer = await Customer.create({
        nama:"John Doe",
        email:"john@gmail.com",
        password:await bcrypt.hash("john123",10),
        alamat:"Jl. Imam Bonjol",
        
    })
    const customer2 = await Customer.create({
        nama:"adam",
        email:"adam@gmail.com",
        password:await bcrypt.hash("adam123",10),
        alamat:"jl benda baru"
    })
    const foodItem = await FoodItem.create({
        itemName:"Nasi Goreng",
        price:"Rp20.000"
    })
    const foodItem2 = await FoodItem.create({
        itemName:"Pempek",
        price:"Rp10.000"
    })
    const payment = await Payment.create({
        paymentDate:new Date(),
        amount:"Rp20.000",
        paymentType:"Cash"
        
        
    })                             
    const payment2 = await Payment.create({
        paymentDate:new Date(),
        amount:"Rp10.000",
        paymentType:"Cash"
        
        
    })
    const listMenu = await ListMenu.create({
        details:"makanan berat",
        foodItemId:foodItem.dataValues.id,
        customerId:customer.dataValues.id
    })   
    
    const listMenu2 = await ListMenu.create({
        details:"makanan ringan",
        foodItemId:foodItem2.dataValues.id,
        customerId:customer2.dataValues.id
    })   
    const order = await Order.create({
        status:"onDelivery",
        orderDate:new Date(),
        listMenuId:listMenu.dataValues.id,
        customerId:customer.dataValues.id,
        paymentId:payment.dataValues.id
    })
    const order2 = await Order.create({
        status:"Delivered",
        orderDate:new Date(),
        listMenuId:listMenu.dataValues.id,
        customerId:customer2.dataValues.id,
        paymentId:payment2.dataValues.id
    })
    // const findAllOrders = await Order.findAll({
    //     attributes:["orderDate","status"],
    //     include:[
    //         {model:Customer, attributes:["nama","alamat"]},
    //         {model:FoodItem, attributes:["itemName","price"]},
    //         {model:Payment, attributes:["paymentDate","amount","paymentType"]}
    //     ]

    // })
 
  

    return {customer,foodItem,order,payment}
}

const user = await createSeeder()
console.log(user)


