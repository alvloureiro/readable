import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenu from './AppMenu';
import CategoriesMenu from './CategoriesMenu';

class AppHeader extends Component {
  render() {
    return (
      <AppBar
        title="Readable"
        iconElementLeft={<CategoriesMenu />}
        iconElementRight={<AppMenu />}
      />
    );
  }
}

export default AppHeader;
