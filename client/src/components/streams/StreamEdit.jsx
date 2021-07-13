import _ from 'lodash';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(props.stream, 'title', 'description')}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
