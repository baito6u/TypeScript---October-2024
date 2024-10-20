export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export class PostsService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com/posts";

  async getAllPosts(): Promise<Post> {
    const responce = await fetch(this.apiUrl);
    return responce.json();
  }

  async getPostById(id: number): Promise<Post> {
    const responce = await fetch(`${this.apiUrl}/${id}`);
    return responce.json();
  }

  async createPost(post: Post): Promise<Post> {
    const responce = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    });

    return responce.json();
  }

  async updatePost(id: number, post: Partial<Post>): Promise<Post> {
    const responce = await fetch(`${this.apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    });

    return responce.json();
  }

  async deletePost(id: number): Promise<void> {
    await fetch(`${this.apiUrl}/${id}`, {
      method: "DELETE",
    });
  }
}
