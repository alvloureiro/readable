import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  APP_LOADING,
  APP_DID_FETCH_INITIAL_DATA_SUCCESS,
  APP_DID_FETCH_INITIAL_DATA_ERROR,
  APP_FETCH_ALL_REACT_POSTS_CATEGORY,
  APP_FETCH_ALL_REDUX_POSTS_CATEGORY,
  APP_FETCH_ALL_UDACITY_POSTS_CATEGORY
} from 'actions/type';
import {
  appDidFetchInitialDataSuccess,
  appDidFetchInitialDataError,
  appFetchingInitialDataDone,
  appDidFetchAllReactPostsCategorySuccess,
  appDidFetchAllReactPostsCategoryError,
  appDidFetchAllReduxPostsCategorySuccess,
  appDidFetchAllReduxPostsCategoryError,
  appDidFetchAllUdacityPostsCategorySuccess,
  appDidFetchAllUdacityPostsCategoryError,
  appCheckCategoryByName
} from 'actions';
import { getCategories, getAllPosts, getPosts } from 'api';

function* fetchAllInitialData() {
  try {
    const categories = yield call(getCategories);
    const posts = yield call(getAllPosts);
    yield put(appDidFetchInitialDataSuccess(posts, categories));
  } catch (error) {
    yield put(appDidFetchInitialDataError(error));
  }
}

function* appDidFetchInitialData() {
  yield put(appFetchingInitialDataDone());
}

function* fetchAllReactPostsCategory() {
  try {
    yield put(appCheckCategoryByName('react'));

    const posts = yield call(getPosts, 'react');

    yield put(appDidFetchAllReactPostsCategorySuccess(posts ? posts : []));
  } catch (error) {
    yield put(appDidFetchAllReactPostsCategoryError(error));
  }
}

function* fetchAllReduxPostsCategory() {
  try {
    yield put(appCheckCategoryByName('redux'));

    const posts = yield call(getPosts, 'redux');

    yield put(appDidFetchAllReduxPostsCategorySuccess(posts ? posts : []));
  } catch (error) {
    yield put(appDidFetchAllReduxPostsCategoryError(error));
  }
}

function* fetchAllUdacityPostsCategory() {
  try {
    yield put(appCheckCategoryByName('udacity'));

    const posts = yield call(getPosts, 'udacity');

    yield put(appDidFetchAllUdacityPostsCategorySuccess(posts ? posts : []));
  } catch (error) {
    yield put(appDidFetchAllUdacityPostsCategoryError(error));
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

export default function*() {
  yield [
    fork(watchInitialDataSaga),
    fork(watchAppDidFetchInitialDataSuccess),
    fork(watchAppDidFetchInitialDataError),
    fork(watchAppFetchReactPostsCategory),
    fork(watchAppFetchReduxPostsCategory),
    fork(watchAppFetchUdacityPostsCategory)
  ];
}
