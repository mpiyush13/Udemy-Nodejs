
// const product=[]
const fs=require('fs')
const path=require('path')
const getProductFromFile=cb=>{

    const p=path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );
    fs.readFile(p,(err,fileContent)=>{
        if(err)
        {
            cb([])
        }else{
            cb(JSON.parse(fileContent))
        }
        
    })
}
module.exports = class Product{
    constructor(title,imageUrl,price,description){
        this.title=title
        this.imageUrl=imageUrl
        
        this.price=price
        this.description=description
    }
save()
{
    const p=path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );
    getProductFromFile(products=>{
        products.push(this)
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)
        })
    });
    
}
static fetchAll(cb){
    getProductFromFile(cb)
   
}

}