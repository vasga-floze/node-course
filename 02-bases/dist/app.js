"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_plugin_1 = require("./plugins/logger.plugin");
const logger = (0, logger_plugin_1.buildLogger)('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo');
