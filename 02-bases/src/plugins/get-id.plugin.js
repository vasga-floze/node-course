const { v4: uuidv4 } = require('uuid');

//getUUID
const getUUID = () => uuidv4();

module.exports = {
    getUUID,
}