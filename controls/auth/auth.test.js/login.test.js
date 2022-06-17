const login = require('../login');
const register = require('../register');
jest.useFakeTimers();

describe('Auth Controller', () => {
  describe('Register', () => {
    test('New User should register with email', async () => {
      const req = {
        body: {
          email: 'email@gmail.com',
          password: 'qwerty123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn((data) => data),
      };

      const result = await register(req, res);
      expect(result.code).toBe(201);
      // expect(result.data.user.email).toBe('email@gmail.com');
      // expect(result.data.user.password).toBeUndefined();
    });
  });

  describe('Login', () => {
    test('User should login with correct creds', async () => {
      const req = {
        body: {
          email: 'test@gmail.com',
          password: 'test123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn((data) => data),
      };

      const result = await login(req, res);

      expect(result.code).toBe(200);
      expect(typeof result.body.email).toBe('string');
      expect(typeof result.body.subscription).toBe('string');
    });
  });
});
