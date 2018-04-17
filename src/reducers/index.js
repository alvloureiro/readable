import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import AppReducer from './AppReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
  app: AppReducer,
  category: CategoryReducer,
  post: PostReducer
});
