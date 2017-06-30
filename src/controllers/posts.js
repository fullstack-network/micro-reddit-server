import { MicroPost } from "../models"

function getAllPosts(req, res, next) {
  MicroPost.findAll().then((posts) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.json(posts);
  });
}

export {
  getAllPosts,
}
