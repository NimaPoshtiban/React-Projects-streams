import { Field, reduxForm } from 'redux-form';

const StreamCreate = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched? 'error':''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input autoComplete="off" {...input} />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    // this will be complete
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field label="Enter Title" name="title" component={renderInput} />
      <Field
        label="Enter Description"
        name="description"
        component={renderInput}
      />
      <button className="ui fluid button green">Submit</button>
    </form>
  );
};
// validating form data via redux-form
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Title is required';
  }
  if (!formValues.description) {
    errors.description = 'Description is required';
  }
  return errors;
};

// docs at : https://redux-form.com
export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
