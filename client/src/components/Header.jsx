import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item ui-font" >
        Streamy
      </Link>
      <div className="right menu">
        <Link className="item">All Streams</Link>
      </div>
    </div>
  );
};

export default Header;
