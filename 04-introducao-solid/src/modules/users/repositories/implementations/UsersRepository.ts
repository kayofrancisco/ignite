import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    const data = new Date();

    Object.assign(user, { name, email, created_at: data, updated_at: data });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find(item => item.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(item => item.email === email);
  }

  turnAdmin(receivedUser: User): User {
    const userIndex = this.users.findIndex(item => item.id === receivedUser.id);

    this.users[userIndex].admin = true;

    return this.users[userIndex];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
