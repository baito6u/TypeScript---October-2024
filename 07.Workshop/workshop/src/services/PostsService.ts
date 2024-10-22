import { Post } from "../types/Posts";
import { GenericService } from "./GenericService"; // assuming this is the path to your GenericService

export class PostsService {
  private genericService: GenericService<Post>;

  constructor() {
    // Initialize GenericService with the API URL for posts
    this.genericService = new GenericService<Post>("https://jsonplaceholder.typicode.com/posts");
  }

  // Use GenericService's methods
  fetchPosts(): Promise<Post[]> {
    return this.genericService.getAll();
  }

  fetchPostById(id: number): Promise<Post> {
    return this.genericService.getById(id);
  }

  createPost(data: Post): Promise<Post> {
    return this.genericService.create(data);
  }

  updatePost(id: number, data: Partial<Post>): Promise<Post> {
    return this.genericService.update(id, data);
  }

  deletePost(id: number): Promise<void> {
    return this.genericService.delete(id);
  }
}

