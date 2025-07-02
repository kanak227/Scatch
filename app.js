const express = require('express');
const app = express();
const db  = require('./config/mongoose-connection')
const ownerRouter = require('./routes/ownersRouter');
const userRouter = require('./routes/usersRouter');
const productRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/index');

const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path')
require('dotenv').config();

app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
    secret: process.env.JWT_KEY,
    resave: false,
    saveUninitialized: false,
}))
app.use(flash());

app.use('/', indexRouter);
app.use("/owners" , ownerRouter);
app.use('/users' , userRouter);
app.use('/products' ,productRouter );

app.listen(3000);