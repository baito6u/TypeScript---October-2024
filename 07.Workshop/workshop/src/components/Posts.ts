export function renderPosts(): void {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `
        <h1>Posts</h1>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
        </ul>
      `;
    }
  }