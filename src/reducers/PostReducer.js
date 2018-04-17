import {
  APP_DID_FETCH_INITIAL_DATA_SUCCESS,
  APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_SUCCESS,
  APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_SUCCESS,
  APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_SUCCESS
} from 'actions/type';

const INITIAL_STATE = {
  posts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_DID_FETCH_INITIAL_DATA_SUCCESS:
    case APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_SUCCESS:
    case APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_SUCCESS:
    case APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_SUCCESS:
      const { posts } = action.payload;
      return {
        ...state,
        posts
      };
    default:
      return state;
  }
};
