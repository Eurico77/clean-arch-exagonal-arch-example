import User from '../../domain/entity/User';
import UserRepository from '../repository/UserRepository';

export default class Signup {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    if (input.name.split(' ').length < 2) throw new Error('Invalid name');
    if (
      !String(input.email)
        .toLowerCase()
        .match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/)
    )
      throw new Error('Invalid email');

    if (input.password.length < 6) throw new Error('Invalid password');

    const user = await User.create(
      input.name,
      input.email,
      input.password,
      input.age
    );
    await this.userRepository.save(user);
  }
}

type Input = {
  name: string;
  email: string;
  password: string;
  age: number;
};
