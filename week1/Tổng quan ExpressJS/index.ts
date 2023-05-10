import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import mongoose from "mongoose";


const app = express()

const DB_URL = 'mongodb://127.0.0.1:27017/demo_connect'
mongoose.connect(DB_URL).then(()=>{
    console.log('Connect Database Success')
})
app.set('views','./src/view');
app.set('view engine','ejs')
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('',router)

app.listen(8080,()=>{
    console.log('Server is running')
})
