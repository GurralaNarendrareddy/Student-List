let express=require("express");
let path=require("path");
let mysql=require("mysql");
let app=express();
app.use(express.json());
let cors=require("cors")

app.use(cors(
    {
        origin:["http://localhost:3004"],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
));

let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Narendra63",
    database:"student"
})

con.connect((err)=>{
    if(err){
        console.log("Error in connection")
        return;
    }
    else{
        console.log("Connected to mysql")
    }
})

app.get("/list",(req,res)=>{
    let sql="select * from data";
    con.query(sql,[],(err,result)=>{
        if(err) return res.json({Error:"Error in retriving"})
        return res.json({Status:"Success",Results:result})
    })
})

app.get("/read/:id",(req,res)=>{
    let id=req.params.id
    let sql="select * from data where id=?"
    con.query(sql,[id],(err,results)=>{
        if(err) return res.json({Error:"Error in fetching"})
        return res.json({Status:"Success",Results:results})
    })
})

app.put("/update/:id",(req,res)=>{
    let id=req.params.id
    console.log(id)
    let sql="update data set name=?,email=? where id=? "
    con.query(sql,[req.body.name,req.body.email,id],(err,results)=>{
        console.log(req.body.name)
        console.log(req.body.email)
        if(err) return res.json({Error:"Error in updating"})
        return res.json({Status:"Success"})
    })
})

app.post("/add",(req,res)=>{
    let sql="insert into data(name,email) values(?,?)";
    con.query(sql,[req.body.name,req.body.email],(err,result)=>{
        if(err) return res.json({Error:"Error in inserting"})
        return res.json({Status:"Success"})
    })
})

app.delete("/delete/:id",(req,res)=>{
    let id=req.params.id;
    let sql="delete from data where id=?"
    con.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error:"Error in delete"})
        return res.json({Status:"Success"})
    })
})

app.listen(3008,()=>{
    console.log("Listening on port 3008");
})