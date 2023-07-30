const path=require('path')
const express=require('express')
const bodyParser=require('body-parser')

const adminData=require('./routes/admin')
const shopRouter=require('./routes/shop')
const get404=require('./controller/error')

// const routes=require('./routes')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData)
app.use(shopRouter)

//This is  for dynamic content by making views default folder
app.set('view engine','ejs')
app.set('views','views')


app.use(get404.get404Page)
 app.listen(3000)

