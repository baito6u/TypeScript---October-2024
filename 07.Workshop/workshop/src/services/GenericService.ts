export class GenericService<T> {
    constructor(private apiUrl: string) {}
  
    async getAll(): Promise<T[]> {
      const response = await fetch(this.apiUrl);
      return response.json();
    }
  
    async getById(id: number): Promise<T> {
      const response = await fetch(`${this.apiUrl}/${id}`);
      return response.json();
    }
  
    async create(data: T): Promise<T> {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  
    async update(id: number, data: Partial<T>): Promise<T> {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  
    async delete(id: number): Promise<void> {
      await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      });
    }
  }
  