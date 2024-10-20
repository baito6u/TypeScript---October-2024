import { HtmlRenderer } from './renderers/HtmlRenderer';
import { Post, PostsService } from './services/PostsService'
import { User, UsersService } from './services/UsersService';
import './style.css'

const postsService = new PostsService();
const usersService = new UsersService();
const renderer = new HtmlRenderer('app');

async function renderPosts() {
  const posts: Post[] = await postsService.getAllPosts();
  let content = '<h1>Posts</h1>';

  posts.forEach((post) => {
    content += `<h2>${post.title}</h2><p>${post.body}</p>`;
  });
  renderer.render(content);
}

async function renderUsers() {
  const users: User[] = await usersService.getAllUsers();
  let content = '<h1>Users</h1>';
  users.forEach((user) => {
    content += `<h2>${user.name}</h2><p>${user.email}</p>`;
  });
  renderer.render(content);
}

document.addEventListener("DOMContentLoaded", () => {
  renderUsers();
})
