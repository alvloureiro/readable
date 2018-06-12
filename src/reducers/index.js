import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './PostReducer';
import AppReducer from './AppReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
  AppReducer,
  CategoryReducer,
  PostReducer,
  form: formReducer
});
