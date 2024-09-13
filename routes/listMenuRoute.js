import express from "express"
import {createListMenu,getAllListMenu,getListMenuById,updateListMenu,deleteListMenu } from "../controller/listMenuController.js"

const listMenuRoute = express.Router();

listMenuRoute.post('/listmenu/create', createListMenu)
listMenuRoute.get('/listmenu/find', getAllListMenu)
listMenuRoute.get('/listmenu/findbyid/:id', getListMenuById)
listMenuRoute.put('/listmenu/update/:id', updateListMenu)
listMenuRoute.delete('/listmenu/delete/:id', deleteListMenu)



export default listMenuRoute;
