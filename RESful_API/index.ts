import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import session from 'express-session';
import {AppDataSource} from "./src/data-source";
import cors from 'cors'
const app =express()

//mySQL
AppDataSource.initialize().then(()=>{
    console.log('Connect database mySQL success')
})

//bắt buộc để views -> đâm vào view, nhận file ejs
app.set('views', './src/view');
app.set('view engine', 'ejs');

// không nhận được from trên HTMl,
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//sử đụng thằng static file ở đâu
app.use(express.static('./public'))

app.use(cors())
//import session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'store_c12',
    cookie: { maxAge: 60000 }}));
//liên kết router
app.use('',router)
app.listen(3000,()=>{
    console.log('Server is running')
})
