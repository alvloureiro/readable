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
  APP_TRY_TO_VOTE_ON_POST
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

export const appDidSaveNewPost = () => {
  return {
    type: APP_DID_SAVE_NEW_POST
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

export const appDidSaveEditedPost = () => {
  return {
    type: APP_DID_SAVE_EDITED_POST
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
