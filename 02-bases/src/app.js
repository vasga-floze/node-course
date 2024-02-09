

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
//require('./js-foundation/05-factory');
const { getAge, getUUID } = require('./plugins')

//console.log(emailTemplate);

// const id = 1;

// getUserById(id , (error, user) => {

//     if(error){
//         throw new Error( error );
//     }

//     console.log({ user })
// })

/* ************************************************ */
const { buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1963-11-15' };

const john = makePerson(obj);

console.log({ john });