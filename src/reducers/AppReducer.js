import { APP_LOADING, APP_DID_FETCH_INITIAL_DATA_ERROR, APP_LOADED } from 'actions/type';

const INITIAL_STATE = {
  loading: false,
  error: undefined
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  const { type } = action;
  switch (type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true
      };
    case APP_DID_FETCH_INITIAL_DATA_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        error
      };
    case APP_LOADED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
