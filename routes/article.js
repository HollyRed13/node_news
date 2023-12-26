var express = require('express');
const articleController = require("../Controllers/articleController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();


router.get('/', articleController.getArticleAll);
router.get('/:idArticle', articleController.getArticle);

module.exports = router;