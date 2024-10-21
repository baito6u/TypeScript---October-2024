// src/components/Users.ts
import { UsersService } from '../services/UsersService';

export async function renderUsers(): Promise<void> {
  const app = document.getElementById('app');
  const usersService = new UsersService();

  try {
    const users = await usersService.fetchUsers();
    if (app) {
      app.innerHTML = `
        <h1>Users</h1>
        <ul>
          ${users.slice(0, 5).map(user => `
            <li>
              <strong>${user.name}</strong> (${user.email}) - ${user.address.city}
            </li>`).join('')}
        </ul>
      `;
    }
  } catch (error) {
    if (app) {
      app.innerHTML = `<p>Error fetching users: ${error.message}</p>`;
    }
  }
}
