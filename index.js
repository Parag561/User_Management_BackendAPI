const express = require("express");
const app = express();
const cors = require('cors');
require('./db/db');
const userSchema = require('./db/userSchema')

app.use(express.json());
app.use(cors());


app.post('/add',async(req,res)=>{
    let user = new userSchema(req.body);
    let result = await user.save();
    res.send(result);
});

app.get('/list', async (req,res)=>{
    let user = await userSchema.find();
    if(user.length>0){
        res.send(user);
    }else{
        res.send({result:"NO Users Found"});
    }
});


app.get('/list/:id',async (req,res)=>{
    const result = await userSchema.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result:"NO User found"});
    }
});


app.put('/list/:id',async (req,res)=>{
    const result  = await userSchema.updateOne({_id:req.params.id},{
        $set : req.body
    });
    res.send(result);
});


app.delete('/list/:id',async (req,res)=>{
    const result = await userSchema.deleteOne({_id:req.params.id});
    res.send(result);
});

app.listen(202);