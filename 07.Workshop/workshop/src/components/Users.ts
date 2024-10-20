export function renderUsers(): void {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `
        <h1>Users</h1>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      `;
    }
  }