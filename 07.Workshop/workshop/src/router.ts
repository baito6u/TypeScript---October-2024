type RouteConfig<T> = {
  path: string;
  component: () => T;
};

export class Router<T> {
  private routes: RouteConfig<T>[];

  constructor() {
    this.routes = [];
    window.addEventListener("hashchange", () => this.routeChanged());
  }

  addRoute(path: string, component: () => T) {
    this.routes.push({ path, component });
  }

  start() {
    this.routeChanged(); // Handle initial load
  }

  private routeChanged() {
    const currentHash = window.location.hash.slice(1);
    const route = this.routes.find((r) => r.path === currentHash);
    if (route) {
      route.component();
    } else {
      console.error("Route not found!");
    }
  }
}
