// src/router.ts
type RouteConfig = {
    path: string;
    component: () => void;
  };
  
  export class Router {
    private routes: RouteConfig[];
  
    constructor() {
      this.routes = [];
      window.addEventListener("hashchange", () => this.routeChanged());
    }
  
    addRoute(path: string, component: () => void) {
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
  