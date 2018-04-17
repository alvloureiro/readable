import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import CategoriesMenu from './CategoriesMenu';
import { appAddNewPost } from 'actions';

class AppHeader extends Component {
  render() {
    return (
      <AppBar
        title="Readable"
        iconElementLeft={<CategoriesMenu />}
        iconElementRight={
          <IconButton
            tooltip="Add New Post"
            onClick={() => {
              this.props.appAddNewPost();
            }}
          >
            <ContentAdd />
          </IconButton>
        }
      />
    );
  }
}

export default connect(null, { appAddNewPost })(AppHeader);
