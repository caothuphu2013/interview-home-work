import { DETAIL } from "../../constants/actionTypes";

export const getDetailPostByIdRequest = (id) => ({
  type: DETAIL.DETAIL_GET_POST_BY_ID_REQUEST,
  payload: {
    id
  }
});

export const getDetailPostByIdSuccess = (data) => ({
  type: DETAIL.DETAIL_GET_POST_BY_ID_SUCCESS,
  payload: {
    data
  }
});

export const getDetailPostByIdFailure = (error) => ({
  type: DETAIL.DETAIL_GET_POST_BY_ID_FAILURE,
  payload: {
    error
  }
});