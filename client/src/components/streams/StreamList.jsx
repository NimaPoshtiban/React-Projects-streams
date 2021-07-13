import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderList=()=>{
    return props.streams.map((stream)=>{
      return(
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"/>
          <div className="content"> 
          {stream.title}
          </div>
          <div className="description">
            {stream.description}
          </div>
        </div>
      )
  })}

  return <div>
    <h2>Streams</h2>
    <div className="ui celled list">
      {renderList()}
    </div>
  </div>;
};

const mapStateToProps = (state) => ({ streams: Object.values(state.streams) });

export default connect(mapStateToProps, { fetchStreams })(StreamList);
