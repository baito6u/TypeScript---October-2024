type RouteHandler = () => void;

export class Router {
  private routes: { [key: string]: RouteHandler } = {};

  addRoute(routeName: string, handler: RouteHandler): void {
    this.routes[routeName] = handler;
  }

  start(): void {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1);
      const routeHandler = this.routes[hash];
      if (routeHandler) {
        routeHandler();
      }
    });

    // Trigger the route based on the initial URL hash
    const initialHash = window.location.hash.substring(1);
    const initialRouteHandler = this.routes[initialHash];
    if (initialRouteHandler) {
      initialRouteHandler();
    }
  }
}
