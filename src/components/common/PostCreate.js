import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './PostForm';
import SnackBar from 'material-ui/Snackbar';
import moment from 'moment';
import uuid from 'uuid/v1';
import { appSaveNewPost } from 'actions';

class PostCreate extends Component {
  savePost = data => {
    const timestamp = moment().valueOf();
    const id = uuid();
    const post = { ...data, timestamp, id };
    this.props.appSaveNewPost(post);
  };

  goBackHome = () => {
    this.props.history.push('/');
  };

  requestClose = () => {
    this.goBackHome();
  };

  actionClicked = () => {
    this.goBackHome();
  };

  render() {
    const { message, title } = this.props;
    return (
      <div style={{ marginLeft: 50 }}>
        <h2>{title ? title : ''}</h2>

        <PostForm onSaveFormData={this.savePost} disabled={false} />
        <SnackBar
          open={message ? true : false}
          message={message ? message : ''}
          action="Home"
          autoHideDuration={1500}
          onRequestClose={this.requestClose}
          onActionClick={this.actionClicked}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ AppReducer }) => {
  const { message } = AppReducer;

  return {
    message
  };
};

export default withRouter(connect(mapStateToProps, { appSaveNewPost })(PostCreate));
