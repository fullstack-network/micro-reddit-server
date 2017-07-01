import { MicroPost } from "../models"

function getAllPosts(req, res, next) {

  return MicroPost.findAll().then((posts) => {
    res.json(posts);
  });
}


function postOptions(req, res, next) {
  res.send(true);
}

function updatePostVotes(req, res, next) {
  const postId = req.body.postId;
  const upVote = req.body.upvote;

  let voteDiff = 1;

  if (!upVote) {
    voteDiff = -1;
  }

  return MicroPost.findById(postId).then((post) => {
    post.votes += voteDiff;
    res.json({});
  })
}

export {
  getAllPosts,
  updatePostVotes,
  postOptions,
}
