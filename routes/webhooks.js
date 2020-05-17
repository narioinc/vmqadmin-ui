var express = require('express');
var router = express.Router();
var fs = require('fs')
var logger = require('../config/logs');
const { spawn } = require("child_process");
const axios = require('axios');

var ini = require('ini');
var vmqWebhooks = require('./models/vmq_webhooks');

var vmqConfig = ini.parse(fs.readFileSync('/etc/vernemq/vernemq.conf', 'utf-8'))

router.get("/types", function(req, res, next) {
    res.json(vmqWebhooks)
});

router.post("/register/dynamic", function(req, res, next) {
    webhookConfig = req.body
    webHookURL = "http://BDW3vM6sTg6cKf9hfnHOwr4UCIT1q4yA@localhost:7777/api/v1/webhooks/register?"
    var params = {
        "hook": webhookConfig.hook_type,
        "endpoint": webhookConfig.hook_url,
        "--base64payload": webhookConfig.isBase64,
        "--response_timeout": webhookConfig.hook_timeout,
        "--no_payload": webhookConfig.no_payload
    }
    axios.get(webHookURL, { params })
        .then(response => {
            res.json({})
        })
        .catch(err => {
            res.status(400);
            res.json({});
        })
})

router.post("/deregister/dynamic", function(req, res, next) {
    webhookConfig = req.body
    webHookURL = "http://BDW3vM6sTg6cKf9hfnHOwr4UCIT1q4yA@localhost:7777/api/v1/webhooks/register?"
    var params = {
        "hook": webhookConfig.hook_type,
        "endpoint": webhookConfig.hook_url,
        "--base64payload": webhookConfig.isBase64,
        "--response_timeout": webhookConfig.hook_timeout,
        "--no_payload": webhookConfig.no_payload
    }
    axios.get(webHookURL, { params })
        .then(response => {
            res.json({})
        })
        .catch(err => {
            res.status(400);
            res.json({});
        })
})

router.post("/register/persistent", function(req, res, next) {
    webhookConfigs = req.body
    webhookConfigs.forEach(webhookConfig => {
        var webhook = "vmq_webhooks." + webhookConfig.hook_name + ".hook";
        var webhookEndpoint = "vmq_webhooks." + webhookConfig.hook_name + ".endpoint";
        vmqConfig[webhook] = webhookConfig.hook_type;
        vmqConfig[webhookEndpoint] = webhookConfig.hook_url;
    });
    fs.writeFileSync('/etc/vernemq/vernemq.conf', ini.stringify(vmqConfig));
    res.json({});
})


router.post("/deregister/persistent", function(req, res, next) {
    webhookConfigs = req.body
    webhookConfigs.forEach(webhookConfig => {
        var webhook = "vmq_webhooks." + webhookConfig.hook_name + ".hook";
        var webhookEndpoint = "vmq_webhooks." + webhookConfig.hook_name + ".endpoint";
        delete vmqConfig[webhook]
        delete vmqConfig[webhookEndpoint]
    });
    fs.writeFileSync('/etc/vernemq/vernemq.conf', ini.stringify(vmqConfig));
    res.json({});
})

router.post("/enable", function(req, res, next) {
    vmqConfig.plugins.vmq_webhooks = "on";
    fs.writeFileSync('/etc/vernemq/vernemq.conf', ini.stringify(vmqConfig));
    res.json({});
})

router.post("/disable", function(req, res, next) {
    config.plugins.vmq_webhooks = "off";
    fs.writeFileSync('/etc/vernemq/vernemq.conf', ini.stringify(vmqConfig));
    res.json({});
})

router.post("/test1", function(req, res, next) {
    console.log(req.body)
    res.json({})
})

router.post("/test2", function(req, res, next) {
    console.log(req.body)
    res.json({})
})

module.exports = router;