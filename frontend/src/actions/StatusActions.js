import axios from "axios";
import {
  STATUS_DETAILS_REQUEST,
  STATUS_DETAILS_FAIL,
  STATUS_DETAILS_SUCCESS,
  STATUS_LIST_FAIL,
  STATUS_LIST_REQUEST,
  STATUS_LIST_SUCCESS,
} from "../constants/StatusConstants";

export const listStatus = () => async (dispatch) => {
  dispatch({
    type: STATUS_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/status");
    dispatch({ type: STATUS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STATUS_LIST_FAIL, payload: error.message });
  }
};

export const detailsStatus = (statusId) => async (dispatch) => {
  dispatch({ type: STATUS_DETAILS_REQUEST, payload: statusId });
  try {
    const { data } = await axios.get(`/api/status/${statusId}`);
    dispatch({ type: STATUS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STATUS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
