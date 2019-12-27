import { DATA } from "../constants/config"

export const getAllComments = () => DATA.COMMENTS;

export const getCommentByIdPost = (id) => DATA.COMMENTS.filter(comment => comment.post === id);

export default {
  getAllComments,
  getCommentByIdPost
}