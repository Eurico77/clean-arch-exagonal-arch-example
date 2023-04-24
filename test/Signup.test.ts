import UserRepositoryMemory from '../src/infra/repository/memory/UserRepositoryMemory';

describe('Signup', () => {
  test('Deve fazer um signup', async () => {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
  });
});
