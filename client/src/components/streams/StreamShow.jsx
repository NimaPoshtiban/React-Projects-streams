import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import { fetchStream } from '../../actions';

const StreamShow = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    props.fetchStream(props.match.params.id);
    const player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${props.match.params.id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} controls style={{ width: '100%' }} />
      <h1>{props.stream?.title}</h1>
      <h5>{props.stream?.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
