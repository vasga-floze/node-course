import { envs } from './env.plugings';



describe('envs.plugin.ts', () => {



  test('should return env options', ()=> {


    expect( envs ).toEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'gabriela@gmail.com',
      MAILER_SECRET_KEY: '123456',
      PROD: false,
      MONGO_URL: 'mongodb://gabriela:123456@localhost:27018',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'gabriela',
      MONGO_PASS: '123456'
    });


  });


  test('should return error if not found env', async() => {
    
    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      await import('./env.plugings');
      expect(true).toBe(false);


    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
    

  })



})