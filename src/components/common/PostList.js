import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'material-ui/List';
import PostItem from './PostItem';

class PostList extends Component {
  render() {
    const { allposts } = this.props;
    return (
      <div>
        <List>{allposts.map(postItem => <PostItem key={postItem.id} post={postItem} />)}</List>
      </div>
    );
  }
}

const mapStateToProps = ({ PostReducer }) => {
  const { allposts } = PostReducer;
  return {
    allposts
  };
};

export default withRouter(connect(mapStateToProps)(PostList));
