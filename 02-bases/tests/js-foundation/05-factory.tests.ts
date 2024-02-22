import { buildMakePerson } from '../../src/js-foundation//05-factory';

describe('js-foundation//05-factory', () => {

    const getUUID = () => '12345';
    const getAge = () => 35;

    //comprobar que el function factory retorna una funcion
    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        expect(typeof makePerson).toBe('function');

    });

    //probar la funcion que esta generando el buildMakePerson para que regrese un objeto
    test('makePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({name: 'John Doe', birthdate: '1985-10-21'});

        expect(johnDoe).toEqual({
            id: '1234',
           name: 'John Doe',
           birthdate: '1985-10-21',
           age: 35
        });

    });

});
