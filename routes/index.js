var express = require('express');
var router = express.Router();
var insert_user = require('../config.js')
var find = require('../config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/register/:FirstName/:LastName/:UserName/:Email/:Gender/:Password/:mobileNumber/:Addressline1/:Addressline2/:city/:pincode', function(req, res, next) {
  insert_user(req.params.FirstName,req.params.LastName,req.params.UserName,req.params.Email,req.params.Gender,req.params.Password,req.params.mobileNumber,req.params.Addressline1,req.params.Addressline2,req.params.city,req.params.pincode)
  .then((res)=>{
    res.send({result: result});
  })
});

router.get('/login/:UserName/:Password', function(req, res, next) {
  find(req.params.UserName,req.params.Password)
  .then((res)=>{
    res.send({result: result});
  })
});

module.exports = router;
