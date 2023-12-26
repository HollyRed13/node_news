const Models = require("../Models/homeModel.js");

exports.getArticleAll = async function(req, res){
    let m=await Models.getAll();
    res.render('articles', {data:m});
};

exports.getArticle = async function(req,res){
    console.log(req.params);
    let m=await Models.getOne(req.params.idArticle);
    res.render('articleShow', {data:m});
};