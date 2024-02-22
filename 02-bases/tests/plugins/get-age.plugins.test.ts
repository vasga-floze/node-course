import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin', ()=>{
    test('getAge() should return the age of a person (a number)', ()=>{
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('getAge() should return current age', () => {   

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
    });
});