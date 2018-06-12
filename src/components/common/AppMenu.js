import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';
import { appAddNewPost, appDidSortedPosts } from 'actions';
import sort from 'fast-sort';

class AppMenu extends Component {
  sortByTimestamp = array => {
    const sortedArr = sort(array).desc(post => post.timestamp);
    this.props.appDidSortedPosts(sortedArr);
    this.props.history.push('/');
  };

  sortByVoteScore = array => {
    const sortedArr = sort(array).desc(post => post.voteScore);
    this.props.appDidSortedPosts(sortedArr);
    this.props.history.push('/');
  };

  constructor() {
    super();
    this.sort = {};
    this.sort['timestamp'] = arr => this.sortByTimestamp(arr);
    this.sort['voteScore'] = arr => this.sortByVoteScore(arr);
  }

  render() {
    return (
      <Toolbar style={{ backgroundColor: cyan500 }}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu
            value="sort"
            onChange={(event, key, value) => {
              const { allposts } = this.props;
              this.sort[value](allposts);
            }}
          >
            <MenuItem value="sort" primaryText="Sorting Order" />
            <MenuItem value="timestamp" primaryText="Date" />
            <MenuItem value="voteScore" primaryText="Vote Score" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <IconButton tooltip="Go Home" onClick={() => this.props.history.push('/')}>
            <HomeIcon />
          </IconButton>
          <IconButton
            tooltip="Add New Post"
            onClick={() => {
              this.props.appAddNewPost();
              this.props.history.push('/create');
            }}
          >
            <ContentAdd />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = ({ PostReducer }) => {
  const { allposts } = PostReducer;
  return {
    allposts
  };
};

export default withRouter(
  connect(mapStateToProps, {
    appAddNewPost,
    appDidSortedPosts
  })(AppMenu)
);
