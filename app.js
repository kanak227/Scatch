const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path')

app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/" , function(req,res){
    res.send("1000");
})

app.listen(3000);