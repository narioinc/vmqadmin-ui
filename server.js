"use strict";
const express = require("express");
const compression = require("compression");
const config = require('config');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * Internal REST APIs
 * **/
var usersRouter = require('./routes/users');
var metricsRouter = require('./routes/metrics')
var liveConfigRouter = require('./routes/liveConfig');
var mqttClientRouter = require('./routes/mqttClients');
var webhooksRouter = require('./routes/webhooks');

const serverPort = config.get('server.port');
const _port = serverPort;
const _app_folder = 'ui/dist/ui'

const app = express();
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors())
app.disable('x-powered-by');
app.use('/api', createProxyMiddleware({ target: 'http://' + config.vmq.hostname + ':' + config.vmq.port, changeOrigin: true }));
app.use('/health', createProxyMiddleware({ target: 'http://' + config.vmq.hostname + ':' + config.vmq.port, changeOrigin: true }));
app.use('/status', createProxyMiddleware({ target: 'http://' + config.vmq.hostname + ':' + config.vmq.port, changeOrigin: true }));

app.use('/users', usersRouter);
app.use('/metrics', metricsRouter);
app.use('/liveConfig', liveConfigRouter);
app.use('/mqttClient', mqttClientRouter);
app.use('/webhooks', webhooksRouter);

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, { maxAge: '1y' }));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function(req, res) {
    res.status(200).sendFile(`/`, { root: _app_folder });
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function() {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});