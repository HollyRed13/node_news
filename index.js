/*let express = require('express');
let app = express();
app.get('/', function(req, res){
	res.send("<h2>Привет Express!</h2>");
});
app.listen(3000);*/
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));//Для принятия данных из
// формы. Обязательно!
app.use(bodyParser.json());//Для принятия данных из формы.Обязательно!

//let index = require('./routes/index');
//app.use('/', index);

let index = require('./routes/article');
app.use('/', index);

let article = require('./routes/article');
app.use('/article', article);

let admin= require('./routes/admin');
app.use('/admin', admin);

app.listen(3000);