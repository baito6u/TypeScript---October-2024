import { PostsService } from "../services/PostsService";
import { HtmlRenderer } from "../utils/HtmlRenderer";  // Import HtmlRenderer
import { Post } from "../types/Posts";

export async function renderPosts(): Promise<void> {
  const postsService = new PostsService();

  try {
    const posts = await postsService.fetchPosts();

    // Use HtmlRenderer to handle rendering
    const postRenderer = new HtmlRenderer<Post>("app"); // 'app' is the ID of the container

    postRenderer.render(posts, (post) => {
      return `
        <li><strong>${post.title}</strong>(${post.userId}): ${post.body}</li>
      `;
    });

  } catch (error: unknown) {
    const app = document.getElementById("app");

    if (app) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      app.innerHTML = `<p>Error fetching posts: ${errorMessage}</p>`;
    }
  }
}
