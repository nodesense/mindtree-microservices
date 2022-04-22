const express = require("express");
const orderController = require("../controllers/order.controller");
const  authMiddleware= require("../middlewares/auth.middleware");
 

const orderRoutes = express.Router()

// /orders is prefix from app/index.js 
orderRoutes.get("/", authMiddleware, orderController.getOrders)

module.exports = orderRoutes