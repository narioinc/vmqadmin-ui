var express = require('express');
var sqlite3 = require('sqlite3').verbose()
var router = express.Router();
var appRoot = require('app-root-path');
var logger = require('../config/logs');
var User = require('./user_model');
const config = require('config');
const axios = require('axios');
const liveConfig = require('../config/server_live_config');
var rateLimit = require('axios-rate-limit');

const ADMIN_USER_ID = "admin"
var vmqHost = config.get("vmq.hostname")
var vmqPort = config.get("vmq.port");

router.get('/', function(req, res, next) {
    //console.log(liveConfig);
    var authHeader = req.headers["authorization"];
    var vmqURL = "http://127.0.0.1:7777/api/v1"
    fetchCurrentConfig(authHeader, vmqURL, (liveConfig) => {
        console.log(liveConfig);
    });
    res.json({});
});

function fetchCurrentConfig(auth, url, callback) {
    const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 10 })
    liveConfigCurrent = { configs: [] };
    configLength = liveConfig["configs"].length;
    liveConfig["configs"].forEach(config => {

        http.get(url + '/show/' + config.config_name, {
                headers: { "Authorization": auth }
            })
            .then(response => {
                newConfig = JSON.parse(JSON.stringify(config));
                if (response.data) {
                    newConfig['currentVal'] = response.data["table"][0][config.config_name]
                    liveConfigCurrent.configs.push(newConfig);
                }
                if (liveConfigCurrent.configs.length >= configLength) {
                    callback(liveConfigCurrent);
                }
            })
            .catch(error => {
                console.log(error);
            })

    });

}

module.exports = router