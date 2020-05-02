var express = require('express');
var sqlite3 = require('sqlite3').verbose()
var router = express.Router();
var appRoot = require('app-root-path');
var logger = require('../config/logs');
var User = require('./user_model');
const config = require('config');
const axios = require('axios');

const ADMIN_USER_ID = "admin"
var vmqHost = config.get("vmq.hostname")
var vmqPort = config.get("vmq.port");


router.get('/', function(req, res, next) {
    var authHeader = req.headers["authorization"];
    var vmqURL = "http://" + vmqHost + ":" + vmqPort + "/api/v1"
    axios.get(vmqURL + '/metrics/show', {
            headers: { "Authorization": authHeader }
        })
        .then(function(response) {
            var metrics = response.data.text.split("\n");
            var metricsResponse = {};
            metrics.forEach(metric => {
                attr = metric.split(" = ");
                console.log(attr);
                if (attr.length >= 2) metricsResponse[attr[0].trim()] = attr[1].trim();
            })
            res.json(metricsResponse);
        })
        .catch(error => {
            console.log(error.response.status);
            res.status(400)
            return res.json({});
        });
});

module.exports = router;