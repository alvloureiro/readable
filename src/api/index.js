const api = 'https://stormy-citadel-22616.herokuapp.com';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: token
};

/**
 * Get all of the categories avaiable for the app
 */
export const getCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
};

/**
 * Get all of the posts
 */
export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts);
};

/**
 * Get all of the posts for a particular category
 * @param {Number} categoryId
 */
export const getPosts = categoryId => {
  return fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts);
};

/**
 * Get the details of a single post
 * @param {Number} postId
 */
export const getPost = postId => {
  return fetch(`${api}/posts/${postId}`, { headers })
    .then(result => result.json())
    .then(data => data.post);
};

/**
 * Add a new post
 * @param {Object} post
 */
export const addPost = post => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...post })
  }).then(res => res.json());
};

/**
 * Used for voting on a post
 * @param {Object} post
 * @param {string} vote
 */
export const addVoteToPost = (post, vote) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());
};

/**
 * Edit the details of an existing post
 * @param {Object} post
 */
export const editPost = post => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: post.title, body: post.body })
  }).then(res => res.json());
};

/**
 * Sets the deleted flag for a post to 'true'
 * Sets the parentDeleted flag for all child comments to 'true'
 * @param {Object} post
 */
export const removePost = post => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers: { ...headers, 'Content-Type': 'application/json' }
  }).then(res => res.json());
};

/**
 * Get all the comments for a single post
 * @param {Number} postId
 */
export const getComments = postId => {
  return fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(result => result.json())
    .then(data => data.comments);
};

/**
 * Add a comment to a post
 * @param {Object} comment
 */
export const addComment = comment => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId
    })
  }).then(res => res.json());
};

/**
 * Get the details for a single comment
 * @param {Number} commentId
 */
export const getComment = commentId => {
  return fetch(`${api}/comments/${commentId}`, { headers })
    .then(result => result.json())
    .then(data => data.comment);
};

/**
 * Used for voting on a comment
 * @param {Object} comment
 * @param {String} vote
 */
export const addVoteToComment = (comment, vote) => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());
};

/**
 * Edit the details of an existing comment
 * @param {Object} comment
 */
export const editComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ timestamp: comment.timestamp, body: comment.body })
  }).then(res => res.json());
};

/**
 * Sets a comment's deleted flag to 'true'
 * @param {Object} comment
 */
export const removeComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: { ...headers }
  }).then(res => res.json());
};
