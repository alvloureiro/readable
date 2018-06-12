import {
  APP_ADD_NEW_POST,
  APP_DID_EDIT_POST,
  APP_DID_REMOVE_POST,
  APP_DID_SAVE_EDITED_POST,
  APP_DID_SAVE_NEW_POST,
  APP_DID_VOTE_ON_POST,
  APP_EDIT_POST,
  APP_REMOVE_POST,
  APP_SAVE_EDITED_POST,
  APP_SAVE_NEW_POST,
  APP_TRY_TO_VOTE_ON_POST,
  APP_DID_SORTED_POSTS,
  APP_GET_ALL_COMMENTS_BY_POST,
  APP_DID_GET_ALL_COMMENTS_BY_POST_SUCCESS,
  APP_DID_GET_ALL_COMMENTS_BY_POST_ERROR,
  APP_ENABLE_EDIT_POST,
  APP_DISABLE_EDIT_POST
} from './type';

export const appAddNewPost = () => {
  return {
    type: APP_ADD_NEW_POST
  };
};

export const appSaveNewPost = post => {
  return {
    type: APP_SAVE_NEW_POST,
    payload: {
      post
    }
  };
};

export const appDidSaveNewPost = updatedlistpost => {
  return {
    type: APP_DID_SAVE_NEW_POST,
    payload: { updatedlistpost }
  };
};

export const appEditPost = post => {
  return {
    type: APP_EDIT_POST,
    payload: {
      post
    }
  };
};

export const appDidEditPost = post => {
  return {
    type: APP_DID_EDIT_POST,
    payload: {
      post
    }
  };
};

export const appSaveEditedPost = post => {
  return {
    type: APP_SAVE_EDITED_POST,
    payload: {
      post
    }
  };
};

export const appDidSaveEditedPost = updatedposts => {
  return {
    type: APP_DID_SAVE_EDITED_POST,
    payload: {
      updatedposts
    }
  };
};

export const appRemovePost = post => {
  return {
    type: APP_REMOVE_POST,
    payload: {
      post
    }
  };
};

export const appDidRemovePost = () => {
  return {
    type: APP_DID_REMOVE_POST
  };
};

export const appTryToVoteOnPost = post => {
  return {
    type: APP_TRY_TO_VOTE_ON_POST,
    payload: {
      post
    }
  };
};

export const appDidVoteOnPost = () => {
  return {
    type: APP_DID_VOTE_ON_POST
  };
};

export const appDidSortedPosts = posts => {
  return {
    type: APP_DID_SORTED_POSTS,
    payload: {
      posts
    }
  };
};

export const appGetAllCommentsByPost = post => {
  return {
    type: APP_GET_ALL_COMMENTS_BY_POST,
    payload: {
      post
    }
  };
};

export const appDidGetAllCommentsByPostSuccess = comments => {
  return {
    type: APP_DID_GET_ALL_COMMENTS_BY_POST_SUCCESS,
    payload: {
      comments
    }
  };
};

export const appDidGetAllCommentsByPostError = error => {
  return {
    type: APP_DID_GET_ALL_COMMENTS_BY_POST_ERROR,
    payload: {
      error
    }
  };
};

export const appEnableEditPost = isFormDisabled => {
  return {
    type: APP_ENABLE_EDIT_POST,
    payload: {
      isFormDisabled
    }
  };
};

export const appDisableEditPost = isFormEnable => {
  return {
    type: APP_DISABLE_EDIT_POST,
    payload: {
      isFormEnable
    }
  };
};
