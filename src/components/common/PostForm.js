import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

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
  componentDidMount() {
    if (this.props.post) this.props.reset();
  }

  render() {
    const {
      pristine,
      reset,
      submitting,
      categories,
      handleSubmit,
      onSaveFormData,
      isDisabled
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(data => onSaveFormData(data))}>
          <fieldset disabled={isDisabled} style={{ margin: 50, border: '2px solid #00BCD4' }}>
            <div>
              <Field
                name="title"
                component={renderTextField}
                label="Title"
                style={{ width: '100%' }}
              />
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
                rows={4}
                style={{ width: '100%' }}
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
              <RaisedButton
                label="Clear Values"
                disabled={pristine || submitting}
                onClick={reset}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  onSaveFormData: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

PostForm.defaultProps = {
  onSaveFormData: () => {},
  isDisabled: false
};

const mapStateToProps = ({ CategoryReducer, PostReducer }) => {
  const { categories } = CategoryReducer;
  const { post } = PostReducer;
  return {
    categories,
    initialValues: { ...post },
    validate
  };
};

PostForm = reduxForm({
  form: 'PostForm'
})(PostForm);

PostForm = connect(mapStateToProps)(PostForm);

export default PostForm;
