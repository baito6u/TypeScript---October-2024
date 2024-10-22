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
          ${users.map(user => `
            <li>
              <strong>${user.name}</strong> (${user.email}) - ${user.username}- ${user.address.city}
            </li>`).join('')}
        </ul>
      `;
    }
  } catch (error: unknown) {
    if (app) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      app.innerHTML = `<p>Error fetching users: ${errorMessage}</p>`;
    }
  }
}
