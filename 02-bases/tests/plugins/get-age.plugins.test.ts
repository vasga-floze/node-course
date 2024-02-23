import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin', () => {
    test('getAge() should return the age of a person (a number)', () => {
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

    //espia sobre un metodo
    //spyOn() should be able to mock methods
    test('getAge should return 0 years old', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1995-10-21';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();

    })
});