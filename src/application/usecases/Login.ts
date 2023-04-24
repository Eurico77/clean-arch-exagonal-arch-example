import UserRepository from '../repository/UserRepository';

export default class Login {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);
    if (!user) throw new Error('Authentication failed');
    const isValidPassword = await user.validatePassword(input.password);
    if (!isValidPassword) throw new Error('Authentication failed');

    return {
      name: user.name.getValue(),
      token: 'token',
    };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  name: string;
  token: string;
};
