// app leader
const express = require("express");
var blogRouter = express.Router();
const setContentTypeHeader = require("../../middleware/setHeader");

// media files
var media = require("../../middleware/upload");


// session master
var session = require("../../middleware/sessionMaster");



// blog controller
var blog_controller = require("../../controller/blog/blog_crud");

// get article list
blogRouter.get("/article_data",blog_controller.getArticle);


//get specific article
blogRouter.get("/article_data/:articleID",blog_controller.getSingleArticle);

// make sure everybody has token.
blogRouter.use(session.verifyToken);

// article registration 
blogRouter.post("/article_data",setContentTypeHeader,media.single('img'),blog_controller.blogRegistration);



// get specific article to delete
blogRouter.get("/specific_data/:id",blog_controller.specificDataToUpdate);

// update data
blogRouter.patch("/update_article_data",setContentTypeHeader,media.single('img'),blog_controller.updateArticle);

// delete an article
blogRouter.delete("/article_to_delete/:id",blog_controller.deleteArticle)


// export module
module.exports = blogRouter;