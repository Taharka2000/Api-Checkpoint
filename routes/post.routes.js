const express=require("express");
const { setPosts, getPosts, editPost, deletePost } = require("../controller/post.controller");
const router=express.Router()
//routes pour acceder a l'url  get
router.get("/",getPosts);
//routes pour acceder a l'url  post
router.post("/",setPosts);
//routes pour acceder a l'url  put
router.put("/:id",editPost)
//routes pour acceder a l'url delete
router.delete("/:id",deletePost)
module.exports=router