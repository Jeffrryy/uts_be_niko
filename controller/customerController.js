
import Customer from "../models/customerModel.js"

export const createCustomer = async (req, res) => {
    const {nama,alamat} = req.body
    try{
        const customer = await Customer.create({
            nama:nama,
            alamat:alamat
        })
        res.status(201).json({customer})
    } catch(err){
        res.status(500).json({error:err, message:"Error creating customer"})
    }
}

export const getAllCustomers = async (req, res) => {
    try{
        const customers = await Customer.findAll()
        res.status(200).json(customers)
    }catch(err){
        res.status(500).json({error:err, message:"Error fetching customers"})
    }
}

export const getCustomerById = async (req, res) => {
 const {id} =req.params
 try{
    const customer = await Customer.findByPk(id);
    if(customer){
        res.status(200).json(customer)
    } else {
        res.status(404).json({message: "customer not found"})
    }
    
 } catch(err) {
    res.status(500).json({message:"error fetching customer" , error: err})
 }
}

export const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { nama, alamat } = req.body;
    try {
      const customer = await Customer.findByPk(id);
      if (customer) {
        customer.nama = nama;
        customer.alamat = alamat;
        await customer.save();
        res.status(200).json(customer);
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating customer", error });
    }
}

export const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
      const customer = await Customer.findByPk(id);
      if (customer) {
        await customer.destroy();
        res.status(200).json({ message: "Customer deleted successfully" });
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting customer", error });
    }
}