import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { capitalize } from 'utils';
import {
  appFetchAllReactPostCategory,
  appFetchAllReduxPostsCategory,
  appFetchAllUdacityPostsCategory
} from 'actions';

class CategoriesMenu extends Component {
  menuItemClicked = name => {
    switch (name) {
      case 'react':
        this.props.appFetchAllReactPostCategory();
        break;
      case 'redux':
        this.props.appFetchAllReduxPostsCategory();
        break;
      case 'udacity':
        this.props.appFetchAllUdacityPostsCategory();
        break;
      default:
        break;
    }
  };

  render() {
    const { categories, checked } = this.props;
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      >
        {categories.map(category => (
          <MenuItem
            key={category.name}
            primaryText={capitalize(category.name)}
            value={category.path}
            checked={category.name === checked}
            onClick={() => {
              this.menuItemClicked(category.name);
            }}
          />
        ))}
      </IconMenu>
    );
  }
}

const mapStateToProps = ({ category }) => {
  const { categories, checked } = category;
  return {
    categories,
    checked
  };
};

export default connect(mapStateToProps, {
  appFetchAllReactPostCategory,
  appFetchAllReduxPostsCategory,
  appFetchAllUdacityPostsCategory
})(CategoriesMenu);
