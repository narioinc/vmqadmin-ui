/**
 * Exports for the WINSTON LOGGIN MODULE
 * import this file into your express section to ensure you 
 * get access to the logger object.
 * 
 */
var appRoot = require('app-root-path');
var winston = require('winston');

var options = {
    file: {
      level: 'info',  //change debug level here
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB  //rollover 5 MB and max 5 files.
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'debug',   //console logs set to debug level
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

  var logger = new winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
  };

  module.exports = logger;