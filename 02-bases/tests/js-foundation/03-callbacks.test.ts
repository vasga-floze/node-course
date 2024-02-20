
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
    
    test('Return an error if user id does not exist', (done) => { //using done to track if callbacks is completed

        const id = 10;

        getUserById(id, (err, user) => { //this callback is non blocking
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done(); //let us know the response its done
        });
    });
});