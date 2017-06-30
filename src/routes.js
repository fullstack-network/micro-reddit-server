import { getAllPosts } from "./controllers/posts"

export default function routes(app) {
  app.get("/posts", getAllPosts);
}
