const Product=require('../models/product')

exports.getAddProduct=(req,res,next)=>{

    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.render('admin/add-product',
    {pagetitle:'This is add product page',
    path:'/admin/add-product',
    formCSS:true,
    productCSS:true,
    activeProduct:true

})
};
exports.postAddProduct=(req,res,next)=>{
    //console.log('i am middle ware')
    const title=req.body.title
    const imageUrl=req.body.imageUrl
    const price=req.body.price
    const description=req.body.description

    const product=new Product(title,imageUrl,price,description)
    // product.push({title:req.body.title})
   //  console.log(req.body)
   product.save()
    res.redirect('/')
    }
    exports.getProducts=(req,res,next)=>{
        Product.fetchAll((product)=>{
            res.render('admin/products',{
            
                pagetitle:'Admin Products',
                prods:product,
                path:'/admin/products',
                formCSS:true,
                productCSS:true,
                activeProduct:true
            
            })
    
        })
    }