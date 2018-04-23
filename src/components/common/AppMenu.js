import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';
import { appAddNewPost } from 'actions';

class AppMenu extends Component {
  render() {
    return (
      <Toolbar style={{ backgroundColor: cyan500 }}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value="sort" onChange={(event, key, value) => console.log(value)}>
            <MenuItem value="sort" primaryText="Sorting Order" />
            <MenuItem value="timestamp" primaryText="Date" />
            <MenuItem value="voteScore" primaryText="Vote Score" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <Link to="/">
            <IconButton tooltip="Go Home">
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/create">
            <IconButton
              tooltip="Add New Post"
              onClick={() => {
                this.props.appAddNewPost();
              }}
            >
              <ContentAdd />
            </IconButton>
          </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default connect(null, { appAddNewPost })(AppMenu);
