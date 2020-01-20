const getDetailPostById = (posts, id) => posts.find((data) => data.id === id);

export default {
  getDetailPostById
}