import { COMMENTS } from '../../constants/actionTypes';

export const getAllCommentsRequest = () => ({
  type: COMMENTS.COMMENTS_GET_ALL_REQUEST
});

export const getAllCommentsSuccess = (data) => ({
  type: COMMENTS.COMMENTS_GET_ALL_SUCCESS,
  payload: {
    data
  }
});

export const getAllCommentsFailure = (error) => ({
  type: COMMENTS.COMMENTS_GET_ALL_FAILURE,
  payload: {
    error
  }
});

export const getCommentByIdPostRequest = (id) => ({
  type: COMMENTS.COMMENTS_GET_BY_ID_POST_REQUEST,
  payload: {
    id
  }
});

export const getCommentByIdPostSuccess = (data) => ({
  type: COMMENTS.COMMENTS_GET_BY_ID_POST_SUCCESS,
  payload: {
    data
  }
});

export const getCommentByIdPostFailure = (error) => ({
  type: COMMENTS.COMMENTS_GET_BY_ID_POST_FAILURE,
  payload: {
    error
  }
});
