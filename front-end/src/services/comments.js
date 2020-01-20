const commentsData = require('../data/comments.json')

export const getAllComments = () => commentsData;

export const getCommentByIdPost = (id) => commentsData.filter((comment) => comment.post === id);

export default {
  getAllComments,
  getCommentByIdPost
}