import Login from '../src/application/usecases/Login';
import Signup from '../src/application/usecases/Signup';
import UserRepositoryMemory from '../src/infra/repository/memory/UserRepositoryMemory';

describe('Signup', () => {
  test('Deve fazer um signup', async () => {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const input = {
      name: 'John Doe',
      email: 'john@mail.com.br',
      password: 'any_password',
      age: 18,
    };

    await signup.execute(input);
    const login = new Login(userRepository);
    const loginInput = {
      email: 'john@mail.com.br',
      password: 'any_password',
    };
    const output = await login.execute(loginInput);
    expect(output.name).toBe('John Doe');
  });
});
