const fs=require('fs')

const requestHandler=(req,res)=>{

    const method=req.method
    console.log("heloo")
    if(req.url==='/')
    {
    res.write('<html>')
    res.write('<head><title>My output</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="massage"><button type="submit">Submit</button></form><body>')
    res.write('</html>')
    return res.end();

    }
    if(req.url==='/message' && method==='POST')
    {
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
            console.log(chunk)

        })
        return req.on('end',()=>{
          const parseBody=Buffer.concat(body).toString();
          const message=parseBody.split('=')['1'];
          fs.writeFile('message.txt',message,err=>{
            console.log(message)
            res.statusCode=302
          res.setHeader('Location','/')
          res.end()
          })
          

        })
        
        

    }


    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first header</title></head>')
    res.write('<body><h1>hey Piyush I am response<h1><body>')
    res.write('</html>')
    res.end();
}
module.exports=requestHandler