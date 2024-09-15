import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import db from "./uttils/connection.js";
import customerRoute from "./routes/customerRoute.js";
import order from "./routes/orderRoute.js";
import foodItems from "./routes/foodItemRoute.js";
import payment from "./routes/paymentRoute.js";
import listMenu from "./routes/listMenuRoute.js";
import cors from "cors"
import './models/index.js'
const app = express();
const port = process.env.PORT;

// await db.sync({force:true})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(customerRoute)
app.use(order)
app.use(foodItems)
app.use(payment)
app.use(listMenu)
app.listen(port, () => {
  console.log(`Server running in ${port}`);
});

//Lanjutin bikin lengkapin controller sama buat erd 