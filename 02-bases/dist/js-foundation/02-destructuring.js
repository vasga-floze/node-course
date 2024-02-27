"use strict";
//console.log(  process );
//console.log(  process.env );
//console.log(  process.env.PORT );
//console.log(  process.env.PORT ?? 3000 );
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
//desestructuracion de objetos - tomar propiedades directamente de un objeto 
const { SHELL, USERNAME, TERM_PROGRAM, USERPROFILE } = process.env;
//imprimir en consola como un objeto
//console.log({SHELL, USERNAME, TERM_PROGRAM, USERPROFILE});
//imprimir como tabla
//console.table({SHELL, USERNAME, TERM_PROGRAM, USERPROFILE});
//desestructurar un array
exports.characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , Flash, Superman] = exports.characters;
//console.log(Superman);
