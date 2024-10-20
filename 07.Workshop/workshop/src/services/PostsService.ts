import { GenericService } from "./GenericService";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export class PostsService extends GenericService<Post> {
  constructor() {
    super("https://jsonplaceholder.typicode.com/posts");
  }
}
