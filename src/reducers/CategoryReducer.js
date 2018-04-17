import { APP_DID_FETCH_INITIAL_DATA_SUCCESS, APP_CHECK_CATEGORY } from 'actions/type';

const INITIAL_STATE = {
  categories: [],
  checked: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case APP_DID_FETCH_INITIAL_DATA_SUCCESS:
      const { categories } = action.payload;
      return {
        ...state,
        categories
      };
    case APP_CHECK_CATEGORY:
      const { categoryName } = action.payload;
      return {
        ...state,
        checked: categoryName
      };
    default:
      return state;
  }
};
