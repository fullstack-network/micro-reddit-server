import { getAllPosts, updatePostVotes, postOptions } from "./controllers/posts"

export default function routes(app) {
  app.get("/posts", getAllPosts);
  app.post("/posts", updatePostVotes);
  app.options("/posts", postOptions);
}
