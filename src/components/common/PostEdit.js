import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './PostForm';

class PostEdit extends Component {
  render() {
    return (
      <div style={{ marginLeft: 50 }}>
        <h2>Edit Post</h2>

        <PostForm onSaveFormData={data => console.log(data)} />
      </div>
    );
  }
}

const mapStateToProps = ({ PostReducer }) => {
  const { post } = PostReducer;
  return {
    post
  };
};

export default withRouter(connect(mapStateToProps)(PostEdit));
