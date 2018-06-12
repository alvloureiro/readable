import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import AppHeader from './common/AppHeader';
import PostList from './common/PostList';
import Progress from './common/Progress';
import PostForm from './common/PostForm';
import { appFetchingInitialData } from 'actions';

class Readable extends Component {
  componentWillMount() {
    this.props.appFetchingInitialData();
  }

  render() {
    return (
      <div>
        {this.props.loading ? <Progress /> : null}
        <AppHeader />
        <Route exact path="/" render={() => <PostList />} />
        <Route path="/create" render={() => <PostForm />} />
        <Snackbar
          open={this.props.error ? true : false}
          autoHideDuration={4000}
          message="Error during the operation"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => {
  const { loading } = app;
  return { loading };
};

export default connect(mapStateToProps, {
  appFetchingInitialData
})(Readable);
