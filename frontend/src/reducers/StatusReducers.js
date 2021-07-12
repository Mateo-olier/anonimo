const {
  STATUS_LIST_REQUEST,
  STATUS_LIST_SUCCESS,
  STATUS_LIST_FAIL,
} = require("../constants/StatusConstants");

export const statusListReducer = (
  state = { loading: true, status: [] },
  action
) => {
  switch (action.type) {
    case STATUS_LIST_REQUEST:
      return { loading: true };
    case STATUS_LIST_SUCCESS:
      return { loading: false, status: action.payload };
    case STATUS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
