import { UsersService } from "../services/UsersService";
import { HtmlRenderer } from "../utils/HtmlRenderer";  // Import HtmlRenderer
import { User } from "../types/Users";  // Assuming you have a User type

export async function renderUsers(): Promise<void> {
  const usersService = new UsersService();

  try {
    const users = await usersService.fetchUsers();

    // Use HtmlRenderer to handle rendering
    const userRenderer = new HtmlRenderer<User>("app");  // 'app' is the ID of the container

    userRenderer.render(users, (user) => {
      return `
        <li><strong>${user.name}</strong>(${user.username}): ${user.email}</li>
      `;
    });

  } catch (error: unknown) {
    const app = document.getElementById("app");

    if (app) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      app.innerHTML = `<p>Error fetching users: ${errorMessage}</p>`;
    }
  }
}
