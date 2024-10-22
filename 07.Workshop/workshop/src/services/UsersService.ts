import { User } from "../types/Users";
import { GenericService } from "./GenericService"; // Assuming this is your generic service path

export class UsersService {
  private genericService: GenericService<User>;

  constructor() {
    // Initialize the GenericService with the API URL for users
    this.genericService = new GenericService<User>("https://jsonplaceholder.typicode.com/users");
  }

  // Use GenericService's methods
  fetchUsers(): Promise<User[]> {
    return this.genericService.getAll();
  }

  fetchUserById(id: number): Promise<User> {
    return this.genericService.getById(id);
  }

  createUser(data: User): Promise<User> {
    return this.genericService.create(data);
  }

  updateUser(id: number, data: Partial<User>): Promise<User> {
    return this.genericService.update(id, data);
  }

  deleteUser(id: number): Promise<void> {
    return this.genericService.delete(id);
  }
}
