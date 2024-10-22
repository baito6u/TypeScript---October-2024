import { Post } from "../types/Posts";

export class PostsService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
  }

  async fetchPosts(): Promise<Post[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  }
}
