import {
  APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_SUCCESS,
  APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_SUCCESS,
  APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_SUCCESS,
  APP_DID_FETCH_INITIAL_DATA_SUCCESS,
  APP_EDIT_POST,
  APP_DID_SORTED_POSTS,
  APP_DID_SAVE_EDITED_POST,
  APP_DID_SAVE_NEW_POST,
  APP_DID_GET_ALL_COMMENTS_BY_POST_SUCCESS,
  APP_ENABLE_EDIT_POST
} from 'actions/type';

const INITIAL_STATE = {
  allposts: [],
  reactposts: [],
  reduxposts: [],
  udacityposts: [],
  comments: [],
  post: {},
  isFormDisabled: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_DID_FETCH_INITIAL_DATA_SUCCESS:
      const { allposts } = action.payload;
      return {
        ...state,
        allposts
      };
    case APP_DID_FETCH_ALL_REACT_POSTS_CATEGORIES_SUCCESS:
      const { reactposts } = action.payload;
      return {
        ...state,
        reactposts
      };
    case APP_DID_FETCH_ALL_REDUX_POSTS_CATEGORY_SUCCESS:
      const { reduxposts } = action.payload;
      return {
        ...state,
        reduxposts
      };
    case APP_DID_FETCH_ALL_UDACITY_POSTS_CATEGORY_SUCCESS:
      const { udacityposts } = action.payload;
      return {
        ...state,
        udacityposts
      };
    case APP_DID_SORTED_POSTS:
      const { posts } = action.payload;
      return {
        ...state,
        allposts: posts
      };
    case APP_EDIT_POST:
      const { post } = action.payload;
      return {
        ...state,
        post
      };
    case APP_DID_SAVE_EDITED_POST:
      const { updatedposts } = action.payload;
      return {
        ...state,
        allposts: updatedposts
      };
    case APP_DID_SAVE_NEW_POST:
      const { updatedlistpost } = action.payload;
      return {
        ...state,
        allposts: updatedlistpost
      };
    case APP_DID_GET_ALL_COMMENTS_BY_POST_SUCCESS:
      const { comments } = action.payload;
      return {
        ...state,
        comments
      };
    case APP_ENABLE_EDIT_POST:
      const { isFormDisabled } = action.payload;
      return {
        ...state,
        isFormDisabled
      };
    default:
      return state;
  }
};
