import {
  APP_FETCH_ALL_REACT_POSTS_CATEGORY,
  APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_SUCCESS,
  APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_ERROR,
  APP_FETCH_ALL_REDUX_POSTS_CATEGORY,
  APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_SUCCESS,
  APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_ERROR,
  APP_FETCH_ALL_UDACITY_POSTS_CATEGORY,
  APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_SUCCESS,
  APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_ERROR,
  APP_CHECK_CATEGORY
} from './type';

export const appFetchAllReactPostCategory = () => {
  return {
    type: APP_FETCH_ALL_REACT_POSTS_CATEGORY
  };
};

export const appDidFetchAllReactPostsCategorySuccess = posts => {
  return {
    type: APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_SUCCESS,
    payload: {
      posts
    }
  };
};

export const appDidFetchAllReactPostsCategoryError = error => {
  return {
    type: APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_ERROR,
    payload: {
      error
    }
  };
};

export const appFetchAllReduxPostsCategory = () => {
  return {
    type: APP_FETCH_ALL_REDUX_POSTS_CATEGORY
  };
};

export const appDidFetchAllReduxPostsCategorySuccess = posts => {
  return {
    type: APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_SUCCESS,
    payload: {
      posts
    }
  };
};

export const appDidFetchAllReduxPostsCategoryError = error => {
  return {
    type: APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_ERROR,
    payload: {
      error
    }
  };
};

export const appFetchAllUdacityPostsCategory = () => {
  return {
    type: APP_FETCH_ALL_UDACITY_POSTS_CATEGORY
  };
};

export const appDidFetchAllUdacityPostsCategorySuccess = posts => {
  return {
    type: APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_SUCCESS,
    payload: {
      posts
    }
  };
};

export const appDidFetchAllUdacityPostsCategoryError = error => {
  return {
    type: APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_ERROR,
    payload: {
      error
    }
  };
};

/**
 * Dispatch action to check the selected category
 * @param {String} categoryName
 */
export const appCheckCategoryByName = categoryName => {
  return {
    type: APP_CHECK_CATEGORY,
    payload: {
      categoryName
    }
  };
};
