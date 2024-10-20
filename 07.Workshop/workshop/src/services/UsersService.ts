import { GenericService } from './GenericService';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export class UsersService extends GenericService<User> {
  constructor() {
    super('https://jsonplaceholder.typicode.com/users');
  }
}

