import Order from "../models/orderModel.js"
import FoodItem from "../models/foodItemModel.js"
import Customer from "../models/customerModel.js"
import Payment from "../models/paymentModel.js"
import ListMenu from "../models/listMenuModel.js"
export const createOrder = async (req, res) => {
  const { status, orderDate, customerId, paymentId, listMenuId } = req.body;
  try {
    const order = await Order.create({
        status:status,
        orderDate:orderDate,
        customerId:customerId,
        paymentId:paymentId,
        listMenuId:listMenuId,
    })
    res.status(201).json({ order })
  } catch (err) {
    res.status(500).json({ error: err.message, message: "Error creating order" })
  }
}

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include:[
        {model:Customer,as:'customer',
          include:[
            {model:ListMenu,as:'listmenu',
              include:{
                model:FoodItem,
                as:'foodItem'
              }
            }
          ]
         },
         {model:Payment,as:'payment'}
       
        
      ]
    })
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message, message: "Error fetching orders" })
  }
}

export const getOrderById = async (req, res) => {
  const { id } = req.params
  try {
    const order = await Order.findByPk(id, {
      include: [
        {model:Customer,as:'customer',
          include:[
            {model:ListMenu,as:'listmenu',
              include:{
                model:FoodItem,
                as:'foodItem'
              }
            }
          ]
         },
         {model:Payment,as:'payment'}        
      ]
    });
    if (order) {
      res.status(200).json(order)
    } else {
      res.status(404).json({ message: "Order not found" })
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching order", error: err })
  }
}

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status, orderDate, customerId, paymentId, listMenuId  } = req.body;
  try {
    const order = await Order.findByPk(id);
    if (order) {

      await order.update({
        status:status,
        orderDate:orderDate,
        customerId:customerId,
        paymentId:paymentId,
        listMenuId:listMenuId,
      })
      // order.status = status;
      // order.orderDate = orderDate;
      // order.customerId = customerId;
      // order.paymentId = paymentId;
      // order.listMenuId = listMenuId;
      // await order.save();
      res.status(200).json({message:"Order updated successfully",order});
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error:error.message });
  }
}

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (order) {
      await order.destroy();
      res.status(200).json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error });
  }
}