import { useEffect } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

const GoogleAuth = (props) => {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '412312915414-08cm6md1da6lvptb4blfg2r55vqcdqmm.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
    // eslint-disable-next-line
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      props.signIn(
        window.gapi.auth2.getAuthInstance().currentUser.get().getId()
      );
    } else {
      props.signOut();
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return <button className="ui red loading button">Loading</button>;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui teal button google">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);

// gapi doc: https://developers.google.com/api-client-library/javascript/reference/referencedocs
