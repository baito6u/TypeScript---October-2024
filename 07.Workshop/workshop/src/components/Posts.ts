import { PostsService } from "../services/PostsService";

export async function renderPosts(): Promise<void> {
  const app = document.getElementById("app");
  const postsService = new PostsService();

  try {
    const posts = await postsService.fetchPosts();
    if (app) {
      app.innerHTML = `
        <h1>Posts</h1>
        <ul>
          ${posts
            .map(
              (post) => `<li><strong>${post.title}</strong>: ${post.body}</li>`
            )
            .join("")}
        </ul>
      `;
    }
  } catch (error: unknown) {
    if (app) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      app.innerHTML = `<p>Error fetching posts: ${errorMessage}</p>`;
    }
  }
}
