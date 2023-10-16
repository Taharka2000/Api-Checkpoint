const PostModel=require("../models/User")
//creation de getPosts pour trouver un user et l'afficher dans la bd
module.exports.getPosts=async(req,res)=>{
    const posts=await PostModel.find()
    res.status(200).json(posts)
}
//creation de set pour creation un model de user
module.exports.setPosts=async(req,res)=>{
    if(!req.body.name){
        res.status(400).json({name:"erreur ajoute ,message"})
    }
    const post=await PostModel.create({
      name:req.body.name,
      user:req.body.user,
    });
    res.status(200).json(post);
};
//creation de editPost pour updtate un user
module.exports.editPost=async(req,res)=>{
    const post =await PostModel.findById(req.params.id)
    if(!post){
        res.status(400).json({message:"ce post n'existe pas"})
    }
    const updatePost=await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new:true}
        )
    res.status(200).json(updatePost)
}
//creation de deletePost pour supprimer un user
module.exports.deletePost=async(req,res)=>{
    const post =await PostModel.findById(req.params.id)
    if(!post){
        res.status(400).json("nexiste pas")
    };
    await post.deleteOne();
    res.status(200).json("Message suprme" +req.params.id)
};