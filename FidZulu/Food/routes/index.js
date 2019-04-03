var express = require('express');
var router = express.Router();
var foods = require('../modules/foods');
var url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/food/all',
function (request, response) {

  //var get_params = url.parse(request.url, true).query;
  var get_all = foods.list();

  response.end(JSON.stringify(get_all));
  }
);

router.get('/food/all/raleigh', 
function (request, response){

    response.setHeader('content-type', 'application/json');
    var obj = foods.list();
    for (var i = 0; i < obj.length; i++){
      obj[i].price = (obj[i].price + (obj[i].price * 0.075)).toFixed(2);
    }

  response.end(JSON.stringify(obj));

});

router.get('/food/all/durham', 
function (request, response){

    response.setHeader('content-type', 'application/json');
    var obj = foods.list();
    for (var i = 0; i < obj.length; i++){
      obj[i].price = (obj[i].price + (obj[i].price * 0.08)).toFixed(2);
    }
  
  response.end(JSON.stringify(obj));

});

router.get('/food/team', 
function (request, response){

    response.setHeader('content-type', 'application/json');
    var obj = foods.teamList();
  
    response.end(JSON.stringify(obj));

});

 



module.exports = router;
