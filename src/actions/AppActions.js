import {
  APP_LOADING,
  APP_SHOULD_FETCH_INITIAL_DATA,
  APP_DID_FETCH_INITIAL_DATA_SUCCESS,
  APP_DID_FETCH_INITIAL_DATA_ERROR,
  APP_SHOULD_SHOW_PROGRESS,
  APP_SHOULD_HIDE_PROGRESS,
  APP_SHOULD_SHOW_FEEDBACK_MESSAGE,
  APP_LOADED
} from './type';

export const appFetchingInitialData = () => {
  return {
    type: APP_LOADING
  };
};

export const appShouldFetchInitialData = () => {
  return {
    type: APP_SHOULD_FETCH_INITIAL_DATA
  };
};

export const appShouldShowProgress = () => {
  return {
    type: APP_SHOULD_SHOW_PROGRESS,
    payload: {
      showProgress: true
    }
  };
};

export const appShoulHideProgress = () => {
  return {
    type: APP_SHOULD_HIDE_PROGRESS,
    payload: { showProgress: false }
  };
};

export const appShouldShowFeedbackMessage = message => {
  return {
    type: APP_SHOULD_SHOW_FEEDBACK_MESSAGE,
    payload: {
      message
    }
  };
};

export const appDidFetchInitialDataSuccess = (allposts, categories) => {
  return {
    type: APP_DID_FETCH_INITIAL_DATA_SUCCESS,
    payload: {
      allposts,
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
