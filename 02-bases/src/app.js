
const {buildLogger} = require('./plugins');

const logger = buildLogger('apps.js');

logger.log("Hola mundo");
logger.error("Simulando un error");