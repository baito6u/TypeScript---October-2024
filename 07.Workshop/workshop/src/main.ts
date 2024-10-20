import { PostsService, Post } from './services/PostsService';
import { UsersService, User } from './services/UsersService';
import { HtmlRenderer } from './renderers/HtmlRenderer';

const postsService = new PostsService();
const usersService = new UsersService();
const postsRenderer = new HtmlRenderer<Post>('app');
const usersRenderer = new HtmlRenderer<User>('app');

// Function to render posts
async function renderPosts() {
  const posts: Post[] = await postsService.getAll();
  postsRenderer.render(posts, (post) => `<h2>${post.title}</h2><p>${post.body}</p>`);
}



// Function to render users
async function renderUsers() {
  const users: User[] = await usersService.getAll();
  usersRenderer.render(users, (user) => `<h2>${user.name}</h2><p>${user.email}</p>`);
}

document.addEventListener('DOMContentLoaded', () => {
  renderUsers();
});
