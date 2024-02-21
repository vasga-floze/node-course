
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
    
    // test('Return an error if user id does not exist', () => { 

    //     const id = 10;

    //     getUserById(id, (err, user) => { 
    //         expect(err).toBe(`User not found with id ${id}`);
    //         expect(user).toBeUndefined();
    //     });
    // });

    //an specific object
    test('getUserById should return John Doe', () => { 

        const id = 1;

        getUserById(id, (err, user) => { 
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
            });
            expect(err).toBeUndefined();
        });
    });
});