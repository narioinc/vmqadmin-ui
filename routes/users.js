var express = require('express');
var sqlite3 = require('sqlite3').verbose()
var router = express.Router();
var appRoot = require('app-root-path');
var logger = require('../config/logs');
var User = require('./user_model');
const config = require('config');
const axios = require('axios');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    return res.json(users);
  });
});

router.get('/:userID', function(req, res, next){
  User.findAll({
    where:{
      userID: req.params.userID
    }
  }).then(user => {
    return res.json(user);
  });
})

router.post('/add', function(req, res, next){
  var request = req.body;
  getVmqAdmin().then(user => {
    var vmqHost = config.get("vmq.hostname")
    var vmqPort = config.get("vmq.port");
    url = "http://" + user[0].apikey + "@" + vmqHost + ":" + vmqPort + "/api/v1"
    logger.info(url);
    axios.get(url + "/api-key/create")
  .then(function (response) {
    logger.info(response.data);
    User.create({ userID: request.userID, firstName: request.firstName, lastName: request.lastName, apikey: response.data.text})
    .then(user => {
      res.status(200);
      return res.json(user);
    }).catch(err => {
      res.status(400);
      res.json({});
    });
  })
  .catch(function (error) {
    res.status(400)
    return res.json({});
  });
  }).catch(err => {
    res.status(400);
    return res.json({});
  });
 
});

router.post('/addAdminStub', function(req, res, next){
  User.create({ userID: "admin", firstName: "admin", lastName: "admin", apikey: "BDW3vM6sTg6cKf9hfnHOwr4UCIT1q4yA"})
  .then(user => {
    res.status(200);
    return res.json(user);
  }).catch(err => {
    res.status(400);
    return res.json({"message" : err.errors.message});
  });
})

function getVmqAdmin(){
  return User.findAll({
    where:{
      userID: 'admin'
    }
  });
}

module.exports = router;


