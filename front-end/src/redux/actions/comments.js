import { COMMENTS } from '../../constants/actionTypes';

export const getAllCommentsRequest = () => {
  return {
    type: COMMENTS.COMMENTS_GET_ALL_REQUEST
  }
}


export const getAllCommentsSuccess = (data) => {
  return {
    type: COMMENTS.COMMENTS_GET_ALL_SUCCESS,
    payload: {
      data
    }
  }
}

export const getAllCommentsFailure = (error) => {
  return {
    type: COMMENTS.COMMENTS_GET_ALL_FAILURE,
    payload: {
      error
    }
  }
}


export const getCommentByIdPostRequest = (id) => {
  return {
    type: COMMENTS.COMMENTS_GET_BY_ID_POST_REQUEST,
    payload: {
      id
    }
  }
}


export const getCommentByIdPostSuccess = (data) => {
  return {
    type: COMMENTS.COMMENTS_GET_BY_ID_POST_SUCCESS,
    payload: {
      data
    }
  }
}

export const getCommentByIdPostFailure = (error) => {
  return {
    type: COMMENTS.COMMENTS_GET_BY_ID_POST_FAILURE,
    payload: {
      error
    }
  }
}
