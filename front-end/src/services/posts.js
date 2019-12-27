import postsData from "../data/posts.json";
import { get as _get } from "lodash";

const getAllPosts = () => postsData;

const searchPosts = keyword =>
  postsData.filter(post =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );

export const formatPosts = (posts, comments, usersData) =>
  posts.map(post => ({
    ...post,
    comments: comments
      .filter(comment => comment.post === post.id)
      .map(comment => ({
        ...comment,
        nameUser:
          _get(
            usersData.find(user => user.id === comment.owner),
            "name",
            ""
          ) || "Anonymous"
      })),
    nameUser:
      _get(
        usersData.find(user => user.id === post.owner),
        "name",
        ""
      ) || "Anonymous"
  }));

export default {
  getAllPosts,
  searchPosts,
  formatPosts
};
