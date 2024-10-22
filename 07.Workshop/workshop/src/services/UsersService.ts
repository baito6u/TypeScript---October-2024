export class UsersService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  async fetchUsers(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }
}
