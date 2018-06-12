import {
  APP_LOADING,
  APP_DID_FETCH_INITIAL_DATA_ERROR,
  APP_SHOULD_SHOW_PROGRESS,
  APP_SHOULD_HIDE_PROGRESS,
  APP_SHOULD_SHOW_FEEDBACK_MESSAGE,
  APP_LOADED,
  APP_EDIT_POST,
  APP_ADD_NEW_POST
} from 'actions/type';

const INITIAL_STATE = {
  loading: false,
  showProgress: false,
  error: undefined,
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true
      };
    case APP_SHOULD_SHOW_PROGRESS:
    case APP_SHOULD_HIDE_PROGRESS:
      const { showProgress } = payload;
      return {
        ...state,
        showProgress
      };
    case APP_SHOULD_SHOW_FEEDBACK_MESSAGE:
      const { message } = payload;
      return {
        ...state,
        message
      };
    case APP_DID_FETCH_INITIAL_DATA_ERROR:
      const { error } = payload;
      return {
        ...state,
        error
      };
    case APP_LOADED:
      return {
        ...state,
        loading: false
      };
    case APP_ADD_NEW_POST:
    case APP_EDIT_POST:
      return {
        ...state,
        message: ''
      };
    default:
      return state;
  }
};
