// src/main.ts
import { Router } from './router';
import { renderPosts } from './components/Posts';
import { renderUsers } from './components/Users';

const router = new Router();

// Add routes
router.addRoute("posts", renderPosts);
router.addRoute("users", renderUsers);

// Start the router
router.start();

// Setup navigation buttons
document.getElementById("posts-btn")?.addEventListener("click", () => {
  window.location.hash = "posts";
});

document.getElementById("users-btn")?.addEventListener("click", () => {
  window.location.hash = "users";
});
