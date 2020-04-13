/**
 * 
 * Internal API to manage users and thier association 
 * to vmq-admin API keys. The API keys are derived by calling
 * the vmq http admin apis with an admin key 
 * that is requested as the first step in setting up the 
 * admin UI.
 * 
 * For now, all users created get the admin api-key using which
 * they can control the entire vmq setup
 * 
 */
var express = require('express');
var sqlite3 = require('sqlite3').verbose()
var router = express.Router();
var appRoot = require('app-root-path');
var logger = require('../config/logs');
var User = require('./user_model');
const config = require('config');
const axios = require('axios');

const ADMIN_USER_ID = "admin"


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    return res.json(users);
  });
});

/* GET users based on a specific userID */
router.get('/:userID', function(req, res, next){
  User.findAll({
    where:{
      userID: req.params.userID
    }
  }).then(user => {
    return res.json(user);
  });
})

/* POST add user to the database and associate a key to them */
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
      res.json({"message" : err.errors.message});
    });
  })
  .catch(function(error) {
    res.status(400)
    return res.json({});
  });
  }).catch(err => {
    res.status(400);
    return res.json({"message" : err.errors.message});
  });
 
});

/* POST API to add a admin, please see this as a stub API 
which will be removed as the code maturees */
router.post('/addAdminStub', function(req, res, next){
  User.create({ userID: ADMIN_USER_ID, firstName: ADMIN_USER_ID, lastName: ADMIN_USER_ID, apikey: "BDW3vM6sTg6cKf9hfnHOwr4UCIT1q4yA"})
  .then(user => {
    res.status(200);
    return res.json(user);
  }).catch(err => {
    res.status(400);
    return res.json({"message" : err.errors.message});
  });
})

/* Function to retrieve the vmq admin user
this is the user who name and key is taken when the tool is setup
for the first time
*/

function getVmqAdmin(){
  return User.findAll({
    where:{
      userID: ADMIN_USER_ID
    }
  });
}

module.exports = router;


