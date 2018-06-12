import { call, put, fork, takeLatest, select } from 'redux-saga/effects';
import { initialize } from 'redux-form';
import {
  APP_LOADING,
  APP_DID_FETCH_INITIAL_DATA_SUCCESS,
  APP_DID_FETCH_INITIAL_DATA_ERROR,
  APP_FETCH_ALL_REACT_POSTS_CATEGORY,
  APP_FETCH_ALL_REDUX_POSTS_CATEGORY,
  APP_FETCH_ALL_UDACITY_POSTS_CATEGORY,
  APP_SAVE_NEW_POST,
  APP_ADD_NEW_POST,
  APP_SAVE_EDITED_POST,
  APP_GET_ALL_COMMENTS_BY_POST
} from 'actions/type';
import {
  appShoulHideProgress,
  appDidFetchInitialDataSuccess,
  appDidFetchInitialDataError,
  appFetchingInitialDataDone,
  appDidFetchAllReactPostsCategorySuccess,
  appDidFetchAllReactPostsCategoryError,
  appDidFetchAllReduxPostsCategorySuccess,
  appDidFetchAllReduxPostsCategoryError,
  appDidFetchAllUdacityPostsCategorySuccess,
  appDidFetchAllUdacityPostsCategoryError,
  appCheckCategoryByName,
  appShouldShowProgress,
  appShouldShowFeedbackMessage,
  appDidSaveEditedPost,
  appDidSaveNewPost,
  appDidGetAllCommentsByPostSuccess,
  appDidGetAllCommentsByPostError
} from 'actions';
import {
  getCategories,
  getAllPosts,
  getPosts,
  addPost,
  editPost,
  getComments,
  addComment,
  getComment
} from 'api';

const getAllPostsFromCurrentState = state => state.PostReducer.allposts;

function* fetchAllInitialData() {
  try {
    yield put(appShouldShowProgress());
    const categories = yield call(getCategories);
    const allposts = yield call(getAllPosts);
    yield put(appDidFetchInitialDataSuccess(allposts, categories));
  } catch (error) {
    yield put(appDidFetchInitialDataError(error));
  }
}

function* appDidFetchInitialData() {
  yield put(appFetchingInitialDataDone());
  yield put(appShoulHideProgress());
}

function* fetchAllReactPostsCategory() {
  try {
    yield put(appCheckCategoryByName('react'));

    const reactposts = yield call(getPosts, 'react');

    yield put(appDidFetchAllReactPostsCategorySuccess(reactposts ? reactposts : []));
  } catch (error) {
    yield put(appDidFetchAllReactPostsCategoryError(error));
  }
}

function* fetchAllReduxPostsCategory() {
  try {
    yield put(appCheckCategoryByName('redux'));

    const reduxposts = yield call(getPosts, 'redux');

    yield put(appDidFetchAllReduxPostsCategorySuccess(reduxposts ? reduxposts : []));
  } catch (error) {
    yield put(appDidFetchAllReduxPostsCategoryError(error));
  }
}

function* fetchAllUdacityPostsCategory() {
  try {
    yield put(appCheckCategoryByName('udacity'));

    const udacityposts = yield call(getPosts, 'udacity');

    yield put(appDidFetchAllUdacityPostsCategorySuccess(udacityposts ? udacityposts : []));
  } catch (error) {
    yield put(appDidFetchAllUdacityPostsCategoryError(error));
  }
}

function* saveNewPost(action) {
  let message;
  try {
    yield put(appShouldShowProgress());
    const { post } = action.payload;
    const result = yield call(addPost, post);
    if (result.id === post.id) {
      message = 'A new post has been created';
    } else {
      message = 'Failed to save a new post';
    }
    yield put(appShouldShowFeedbackMessage(message));
    yield put(appShoulHideProgress());
    const allposts = yield select(getAllPostsFromCurrentState);
    const allUpdatedPosts = allposts.concat(result);
    yield put(appDidSaveNewPost(allUpdatedPosts));
  } catch (error) {
    console.log(error);
  }
}

function* addNewPost() {
  yield put(initialize('PostForm', {}, false, [{ keepValues: false }]));
}

function* saveEditedPost(action) {
  try {
    yield put(appShouldShowProgress());
    const { post } = action.payload;
    const result = yield call(editPost, post);
    if (result) {
      yield put(appShoulHideProgress());
      yield put(appShouldShowFeedbackMessage('Post successfully edited'));
      const allposts = yield select(getAllPostsFromCurrentState);
      const allUpdatedPosts = allposts.map(post => {
        if (post.id === result.id) {
          post = result;
        }
        return post;
      });

      yield put(appDidSaveEditedPost(allUpdatedPosts));
    }
  } catch (error) {
    console.log(error);
    yield put(appShouldShowFeedbackMessage('Failed when try to save changes'));
  }
}

function* fetchAllCommentsByPost(action) {
  try {
    const { post } = action.payload;
    const commentList = yield call(getComments, post.id);
    yield put(appDidGetAllCommentsByPostSuccess(commentList));
  } catch (error) {
    yield put(appDidGetAllCommentsByPostError(error));
  }
}

export function* watchInitialDataSaga() {
  yield takeLatest(APP_LOADING, fetchAllInitialData);
}

export function* watchAppDidFetchInitialDataSuccess() {
  yield takeLatest(APP_DID_FETCH_INITIAL_DATA_SUCCESS, appDidFetchInitialData);
}

export function* watchAppDidFetchInitialDataError() {
  yield takeLatest(APP_DID_FETCH_INITIAL_DATA_ERROR, appDidFetchInitialData);
}

export function* watchAppFetchReactPostsCategory() {
  yield takeLatest(APP_FETCH_ALL_REACT_POSTS_CATEGORY, fetchAllReactPostsCategory);
}

export function* watchAppFetchReduxPostsCategory() {
  yield takeLatest(APP_FETCH_ALL_REDUX_POSTS_CATEGORY, fetchAllReduxPostsCategory);
}

export function* watchAppFetchUdacityPostsCategory() {
  yield takeLatest(APP_FETCH_ALL_UDACITY_POSTS_CATEGORY, fetchAllUdacityPostsCategory);
}

export function* watchAppSaveNewPost() {
  yield takeLatest(APP_SAVE_NEW_POST, saveNewPost);
}

export function* watchAppAddNewPost() {
  yield takeLatest(APP_ADD_NEW_POST, addNewPost);
}

export function* watchAppSaveEditedPost() {
  yield takeLatest(APP_SAVE_EDITED_POST, saveEditedPost);
}

export function* watchAppGetAllCommentsByPost() {
  yield takeLatest(APP_GET_ALL_COMMENTS_BY_POST, fetchAllCommentsByPost);
}

export default function*() {
  yield [
    fork(watchInitialDataSaga),
    fork(watchAppDidFetchInitialDataSuccess),
    fork(watchAppDidFetchInitialDataError),
    fork(watchAppFetchReactPostsCategory),
    fork(watchAppFetchReduxPostsCategory),
    fork(watchAppFetchUdacityPostsCategory),
    fork(watchAppSaveNewPost),
    fork(watchAppAddNewPost),
    fork(watchAppSaveEditedPost),
    fork(watchAppGetAllCommentsByPost)
  ];
}
