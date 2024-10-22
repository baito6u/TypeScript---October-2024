import { User } from "../types/User";

export class UsersService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  async fetchUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }
}
