export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export class UsersService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com/users";

  async getAllUsers(): Promise<User[]> {
    const responce = await fetch(this.apiUrl);
    return responce.json();
  }

  async getUserByID(id: number): Promise<User> {
    const responce = await fetch(`${this.apiUrl}/${id}`);
    return responce.json();
  }

  async createUser(user: User): Promise<User> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }

  async updateUser(id: number, user: Partial<User>): Promise<User> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }

  async deleteUser(id: number): Promise<void> {
    await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    });
  }
}
