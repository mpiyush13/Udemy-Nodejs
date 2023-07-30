const express=require('express')
const path=require('path')
// const admin=require('./admin')
const getController=require('../controller/shop')

const router=express.Router()
router.get('/',getController.getIndex)
router.get('/products',getController.getProduct)
router.get('/cart',getController.getCart)
router.get('/orders',getController.getOrders)
router.get('/checkout',getController.getCheckout)

   
module.exports=router