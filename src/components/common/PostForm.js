import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import SnackBar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import uuid from 'uuid/v1';
import { appSaveNewPost } from 'actions';

const validate = values => {
  const errors = {};
  const requiredFields = ['title', 'body', 'category', 'author'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

class PostForm extends Component {
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
    const { pristine, reset, submitting, categories, handleSubmit, message } = this.props;
    return (
      <div style={{ marginLeft: 50 }}>
        <h2>{this.props.title ? this.props.title : ''}</h2>
        <form onSubmit={handleSubmit(data => this.savePost(data))}>
          <div>
            <Field name="title" component={renderTextField} label="Title" />
          </div>
          <div>
            <Field name="category" component={renderSelectField} label="Category">
              {categories.map(category => (
                <MenuItem
                  key={category.name}
                  value={`${category.name}`}
                  primaryText={category.name}
                />
              ))}
            </Field>
          </div>
          <div>
            <Field
              name="body"
              component={renderTextField}
              label="Description"
              multiLine={true}
              rows={5}
            />
          </div>
          <div>
            <Field name="author" component={renderTextField} label="Author" />
          </div>
          <div style={{ marginTop: 30 }}>
            <RaisedButton
              label="Submit"
              type="submit"
              disabled={pristine || submitting}
              style={{ marginRight: 10 }}
            />
            <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset} />
          </div>
        </form>

        <SnackBar
          open={message ? true : false}
          message={message ? message : ''}
          action="Home"
          autoHideDuration={3000}
          onRequestClose={this.requestClose}
          onActionClick={this.actionClicked}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ category, app }) => {
  const { categories } = category;
  const { message } = app;

  return {
    categories,
    message
  };
};

PostForm = withRouter(connect(mapStateToProps, { appSaveNewPost })(PostForm));

export default reduxForm({
  form: 'PostForm',
  validate
})(PostForm);
