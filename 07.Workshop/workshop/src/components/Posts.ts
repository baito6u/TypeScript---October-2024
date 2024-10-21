// src/components/Posts.ts
import { PostsService } from '../services/PostsService';

export async function renderPosts(): Promise<void> {
  const app = document.getElementById('app');
  const postsService = new PostsService();

  try {
    const posts = await postsService.fetchPosts();
    if (app) {
      app.innerHTML = `
        <h1>Posts</h1>
        <ul>
          ${posts.slice(0, 5).map(post => `<li><strong>${post.title}</strong>: ${post.body}</li>`).join('')}
        </ul>
      `;
    }
  } catch (error) {
    if (app) {
      app.innerHTML = `<p>Error fetching posts: ${error.message}</p>`;
    }
  }
}

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
          ${users.slice(0, 5).map(user => `<li>${user.name} (${user.email}) - ${user.address.city}</li>`).join('')}
        </ul>
      `;
    }
  } catch (error) {
    if (app) {
      app.innerHTML = `<p>Error fetching users: ${error.message}</p>`;
    }
  }
}
