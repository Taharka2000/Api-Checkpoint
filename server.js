const express=require('express');
//importation de bd
const connectDB = require('./config/db');
const dotenv=require("dotenv").config();
const app=express();
connectDB();
const port=5000;
//creation d'un middleware pour la lecture des req
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//import routes
app.use("/post",require("./routes/post.routes"))
app.listen(port,()=>console.log("le serveur a demare au pot "+ port));
