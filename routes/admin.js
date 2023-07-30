const express=require('express')
const path=require('path')
const router=express.Router()
const adminController=require('../controller/admin')
router.get('/add-product',adminController.getAddProduct)
router.get('/products',adminController.getProducts)
router.post('/add',adminController.postAddProduct)

module.exports=router
