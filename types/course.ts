export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

export interface DummyJsonResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}