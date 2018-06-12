import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SnackBar from 'material-ui/Snackbar';
import Toggle from 'material-ui/Toggle';
import PostForm from './PostForm';
import CommentItem from './CommentItem';
import { appSaveEditedPost, appGetAllCommentsByPost, appEnableEditPost } from 'actions';

class PostEdit extends Component {
  componentDidMount() {
    const { post, appGetAllCommentsByPost } = this.props;

    appGetAllCommentsByPost(post);
  }

  saveEditedPost = post => {
    const { appSaveEditedPost } = this.props;
    appSaveEditedPost(post);
  };

  onToggleEditChange = (event, isInputChecked) => {
    this.props.appEnableEditPost(!isInputChecked);
  };

  render() {
    const { message, history, comments, isFormDisabled } = this.props;
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'row wrap',
            marginTop: 20
          }}
        >
          <h2 style={{ width: 300, margin: 'auto' }}>Post Details</h2>
          <Toggle
            style={{ width: 100, margin: 'auto' }}
            label="Edit"
            labelPosition="right"
            onToggle={this.onToggleEditChange}
          />
        </div>
        <div>
          <PostForm
            onSaveFormData={data => this.saveEditedPost(data)}
            isDisabled={isFormDisabled}
            style={{ marginLeft: 50, marginTop: 0 }}
          />
        </div>
        <Divider />
        <h3>Comments</h3>
        <List>{comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}</List>

        <SnackBar
          open={message ? true : false}
          message={message ? message : ''}
          autoHideDuration={2300}
          onRequestClose={() => {
            history.push('/');
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ AppReducer, PostReducer }) => {
  const { post, comments, isFormDisabled } = PostReducer;
  const { message } = AppReducer;
  return {
    message,
    post,
    comments,
    isFormDisabled
  };
};

export default withRouter(
  connect(mapStateToProps, { appSaveEditedPost, appGetAllCommentsByPost, appEnableEditPost })(
    PostEdit
  )
);
