import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const actions = (
    <Fragment>
      <button onClick={()=>props.deleteStream(props.match.params.id)} className="ui button negative">Delete</button>
      <button onClick={() => history.push('/')} className="ui button">
        Cancel
      </button>
    </Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title={`Delete Stream: ${props.stream?.title}`}
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
