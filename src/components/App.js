import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from './common/AppHeader';
import PostCreate from './common/PostCreate';
import PostEdit from './common/PostEdit';
import PostList from './common/PostList';
import Progress from './common/Progress';
import { appFetchingInitialData } from 'actions';

class App extends Component {
  componentWillMount() {
    this.props.appFetchingInitialData();
  }

  render() {
    const { loading, showProgress } = this.props;
    return (
      <div>
        <AppHeader />
        {loading || showProgress ? <Progress /> : null}
        <Switch>
          <Route exact path="/" render={() => <PostList />} />
          <Route path="/create" render={() => <PostCreate title="Add New Post" />} />
          <Route path="/edit" render={() => <PostEdit />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ AppReducer }) => {
  const { loading, showProgress } = AppReducer;
  return { loading, showProgress };
};

export default withRouter(
  connect(mapStateToProps, {
    appFetchingInitialData
  })(App)
);
