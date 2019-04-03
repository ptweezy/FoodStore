var express = require('express');
var router = express.Router();
var foods = require('../modules/foods');
var url = require('url');
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/food/all',
function (request, response) {

  response.setHeader('content-type', 'application/json');
  var get_all = foods.list();

  response.end(JSON.stringify(get_all));
  }
);

router.get('/food/all/raleigh', 
function (request, response){

    response.setHeader('content-type', 'application/json');
    var obj = foods.list();
    for (var i = 0; i < obj.length; i++){
      obj[i].price = (obj[i].price * 1.075).toFixed(2);
    }
    response.end(JSON.stringify(obj));

});

router.get('/food/all/durham', 
function (request, response){

    response.setHeader('content-type', 'application/json');
    var obj = foods.list();
    for (var i = 0; i < obj.length; i++){
      obj[i].price = (obj[i].price * 1.08).toFixed(2);
    }
    response.end(JSON.stringify(obj));

});

router.get('/food/team', 
function (request, response){

    response.setHeader('content-type', 'application/json');
    var obj = foods.teamList();
  
    response.end(JSON.stringify(obj));

});

router.post('/food/add', function(request, response){

  response.setHeader('content-type', 'application/json');
  var obj = foods.list();
  var requestHeaders = request.headers;
  var fName = requestHeaders.name;
  var fBrand = requestHeaders.brand;
  var fWeight = requestHeaders.weight;
  var fCalories = requestHeaders.calories;
  var fPrice = requestHeaders.price;

  var foodToAdd = new Food(fName, fBrand, fWeight, fCalories, fPrice);
  obj[obj.length] = foodToAdd;
  fs.writeFileSync('../data/Foodjson.json', JSON.stringify(obj));

  response.end(JSON.stringify(obj));
  
});

function Food(fName, fBrand, fWeight, fCalories, fPrice){
  this.name = fName,
  this.brand = fBrand,
  this.weight = fWeight,
  this.calories = fCalories,
  this.price = fPrice;
}

 



module.exports = router;
