exports.get404Page=(req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404page.html'))
    
    // res.send("<h1>jhhh</h1>")
    res.status(404).render('404',{
        pagetitle:'Page not Found....',
        path:'/r'
    
    })
}