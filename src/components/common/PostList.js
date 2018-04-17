import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import PostItem from './PostItem';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return <List>{posts.map(postItem => <PostItem key={postItem.id} post={postItem} />)}</List>;
  }
}

const mapStateToProps = ({ post }) => {
  const { posts } = post;
  return {
    posts
  };
};

export default connect(mapStateToProps)(PostList);
