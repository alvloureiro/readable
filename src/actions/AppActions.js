import {
  APP_LOADING,
  APP_DID_FETCH_INITIAL_DATA_SUCCESS,
  APP_DID_FETCH_INITIAL_DATA_ERROR,
  APP_LOADED
} from './type';

export const appFetchingInitialData = () => {
  return {
    type: APP_LOADING
  };
};

export const appDidFetchInitialDataSuccess = (posts, categories) => {
  return {
    type: APP_DID_FETCH_INITIAL_DATA_SUCCESS,
    payload: {
      posts,
      categories
    }
  };
};

export const appDidFetchInitialDataError = error => {
  return {
    type: APP_DID_FETCH_INITIAL_DATA_ERROR,
    payload: { error }
  };
};

export const appFetchingInitialDataDone = () => {
  return {
    type: APP_LOADED
  };
};
