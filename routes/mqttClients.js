var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var logger = require('../config/logs');
const config = require('config');
const { spawn } = require("child_process");

router.get('/', function(req, res, next) {
    //console.log("mqttclient");
    res.json({});
    const ls = spawn("sudo", ["vmq-passwd", "/etc/vernemq/vmq.passwd", "name"]);
    ls.stdin.setDefaultEncoding("utf-8");

    ls.stdout.on("data", data => {
        //console.log("data came")
        //console.log(data);
        if (data == '[sudo] password for naresh:') {
            console.log("for sudo")
            writeSudoPasswd(ls)
        }
        if (data == 'Password:' || data == 'Reenter password:') {
            console.log("for vmq-admin")
            writePasswd(ls);
        }
    })


    ls.stderr.on("data", data => {
        console.log("data came")
        console.log(data.toString('utf8'));
    })

    ls.on('error', (error) => {
        console.log('error: ' + error.message);
    });

})

writePasswd = function(process) {
    process.stdin.write("password\r\n")
}

writeSudoPasswd = function(process) {
    process.stdin.write("dextetslab123")
}

module.exports = router;