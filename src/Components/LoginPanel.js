import React from 'react';
import firebase from 'firebase';
import { Button } from 'reactstrap';

class LoginPanel extends React.Component {
  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return(
      <div>
        <Button color="danger" onClick={ this.googleLogin }>Login with Google</Button>
      </div>
    );
  }
}

export default LoginPanel;
