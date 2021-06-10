import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.findByEmail(email);

    if (!name) {
      throw new Error('O nome deve ser preenchido');
    }

    if (!name) {
      throw new Error('O email deve ser preenchido');
    }

    if (user) {
      throw new Error('Já existe usuário com este email');
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
