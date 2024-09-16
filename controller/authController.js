import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import Customer from '../models/customerModel.js'
dotenv.config()

export const login = async (req, res) => {
    try {
        const {email, password} = req.body

        const customer = await Customer.findOne({where:{email:email}})
        if(!customer){
            return res.status(404).json({message:"Customer not found"})
        }
        const passwordValid = await bcrypt.compare(password, customer.password)
        if(!passwordValid){
            return res.status(401).json({message:"Invalid password"})
        }
        
        const token = jwt.sign({
            id:customer.id, 
            email:customer.email //payload
        },
        process.env.JWT_SECRET || "SECRETANJAY", //JWT SECRET KEY
         {
            expiresIn:"1h" //expired time
        })
        res.status(200).json({message:"Login Success", token})
    } catch (error)
    {
        res.status(500).json({message:"Login Failed", error:error.message})
    }
}

export const register = async (req, res) => {
    try {
        const {nama, email, alamat, password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)

        const newCustomer = await Customer.create({
            nama,
            email,
            alamat,
            password:hashedPassword
        })
        res.status(201).json({message:"Register Success", customer:newCustomer})
    } catch (error) {
        res.status(500).json({message:"Register Failed", error:error.message})
    }
}