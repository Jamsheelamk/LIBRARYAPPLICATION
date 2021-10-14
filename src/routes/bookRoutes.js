
const express= require("express");

const booksRouter =express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){

    // var books=[
   
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img:"tom.jpg"
    //      },
    //      {
    //         title: 'Harry potter',
    //         author: 'J K Rowling',
    //         genre:'Fantasy',
    //         img:"hary.jpg"
    //      },
    //      {
    //         title: 'Pathummayude adue',
    //         author: 'Basheer',
    //         genre:'Drama',
    //         img:"bash.jpg"
    //      }
         
    // ]

    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books", {
                nav,
               
                title:'Library',
                books
            });
        })

        
    });
    
    
    booksRouter.get('/:i',function(req,res){
       const i= req.params.i;
       Bookdata.findOne({_id:i})
       .then(function(book){
        res.render("book", {
            
            nav,
            title:'Library',
           book
        })
       })
        
    })

return booksRouter;

}

module.exports=router;