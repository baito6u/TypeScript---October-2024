export class HtmlRenderer {
  private container: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id ${containerId} not found!`);
    }

    this.container = container;
  }

  render(content: string): void {
    this.container.innerHTML = content;
  }
}
