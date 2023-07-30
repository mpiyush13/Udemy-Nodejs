
// const product=[]
const Product=require('../models/product')
exports.getProduct=(req,res,next)=>{
    // console.log('i am another middle ware')
    Product.fetchAll((product)=>{
        res.render('shop/product-list',{
        
            pagetitle:'All prducts',
            prods:product,
            path:'/products',
            formCSS:true,
            productCSS:true,
            activeProduct:true
        
        })

    })
    // console.log(product)
    
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))

   }
   exports.getIndex=(req,res,next)=>{
    // console.log('i am another middle ware')
    Product.fetchAll(product=>{
        res.render('shop/index',{
        
            pagetitle:'Shop',
            prods:product,
            path:'/',
            
        
        })

    })
}
exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pagetitle:'Your Cart'

    })
}
exports.getOrders=(req,res,next)=>{
    res.render('shop/orders',{
        path:'/orders',
        pagetitle:'Your Orders'

    })
}
exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pagetitle:'Checkout'

    })
}