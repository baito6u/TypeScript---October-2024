export class HtmlRenderer<T> {
  private container: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id ${containerId} not found`);
    }
    this.container = container;
  }

  render(items: T[], renderItem: (item: T) => string): void {
    this.container.innerHTML = items.map(renderItem).join('');
  }
}
