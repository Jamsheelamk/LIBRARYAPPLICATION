
const express= require("express");

const adminRouter =express.Router();

const Bookdata=require('../model/Bookdata');

// const multer = require('multer');
// var storage= multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename: function(req,file,cb){
//         cb(null, file.filename+"_"+Date.now()+"_"+file.originalname);
//     }
// })
// var upload= multer({
//     storage:  storage,

// }).single("image");


function router(nav){

    adminRouter.get('/',function(req,res){

        res.render("addBook", {
            nav,
           
            title:'Library'
            
        });
    });


    adminRouter.post('/admin/add',function(req,res){

var item = {
    title:req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.body.image
} 
          var book = Bookdata(item);

         book.save();

         res.redirect('/books');
    });
    
    return adminRouter;
}
    
    





module.exports=router;