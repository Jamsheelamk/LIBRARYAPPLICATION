
const express= require("express");

const adminRouter =express.Router();

const Bookdata=require('../model/Bookdata');


function router(nav){

    adminRouter.get('/',function(req,res){

        res.render("addBook", {
            nav,
           
            title:'Library',
            
        });
    });


    adminRouter.post('/add',function(req,res){

var item = {
    title:require.body.title,
    author:require.body.author,
    genre:require.body.genre,
    image:require.body.image
} 
          var book = Bookdata(item);

         book.save();

         res.redirect('/books');
    });
    
    return adminRouter;
}
    
    





module.exports=router;