import { POSTS } from "../../constants/actionTypes";

export const getAllPostsRequest = () => ({
  type: POSTS.POSTS_GET_ALL_REQUEST
});

export const getAllPostsSuccess = data => ({
  type: POSTS.POSTS_GET_ALL_SUCCESS,
  payload: {
    data
  }
});

export const getAllPostsFailure = error => ({
  type: POSTS.POSTS_GET_ALL_FAILURE,
  payload: {
    error
  }
});

export const searchPostsRequest = keyword => ({
  type: POSTS.POSTS_SEARCH_REQUEST,
  payload: {
    keyword
  }
});

export const searchPostsSuccess = data => ({
  type: POSTS.POSTS_SEARCH_SUCCESS,
  payload: {
    data
  }
});

export const searchPostsFailure = error => ({
  type: POSTS.POSTS_SEARCH_FAILURE,
  payload: {
    error
  }
});