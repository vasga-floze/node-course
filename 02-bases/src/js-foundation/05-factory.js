// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins')

//const obj = {name: 'John', birthdate: '1982-02-23'};

const buildMakePerson = ({ getAge, getUUID }) => {
    
    return ({ name, birthdate }) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

// const john = buildPerson (obj);

// console.log(john);

module.exports = {
    buildMakePerson,
}