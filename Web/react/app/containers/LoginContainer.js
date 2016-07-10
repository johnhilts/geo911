import React from 'react';
import ReactRouter from 'react-router';
import Rebase from 're-base';
// var base = Rebase.createClass('https://geo911-help-rescue-me.firebaseio.com/');
var firebaseConfig = {
  apiKey: 'AIzaSyCW38Sypy_cF7_o1pU3fY7SctOeOuJAtNk',
  authDomain: 'geo911-help-rescue-me.firebaseapp.com',
  databaseURL: 'https://geo911-help-rescue-me.firebaseio.com/',
  storageBucket: 'geo911-help-rescue-me.appspot.com',
};
var base = Rebase.createClass(firebaseConfig);
import Login from '../components/Login';

const LoginContainer = React.createClass({

  // NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      'users': {},
      'password': '',
    }
  },

	loginFields : {email: 0, password: 1, },

  handleLoginSubmit(event) {
    event.preventDefault();

    var loginInput = {email: event.target[this.loginFields.email].value, password: event.target[this.loginFields.password].value};

    base.authWithPassword({
      email    : loginInput.email,
      password : loginInput.password,
    }, this.authUserSuccess.bind(null, loginInput));
  },

  authUserSuccess(loginInput, err, authData) {

    if (err) {
      alert(err.message);
      return;
    }

    this.setState({password: loginInput.password});

		this.ref = base.fetch('users/' + authData.uid, { // NOTE: Firebase's security rules prevent a user from accessing someone else's data
			context : this,
      then(user) {
        if (!user) {
          alert('Login Failed');
          return;
        }

        // re-read helpers asArray
        this.ref = base.fetch('users/' + user.owner + '/helpers', {
          context : this,
          asArray : true,
          then(helpers) {
            user.helpers = helpers;

            this.props.onAuthorize(user);

            this.context.router.push('/');
          },
        });
      },
		});
  },

  handleUpdateEmail(event) {
    this.setState({ inputEmail: [event.target.value] })
  },

  handleUpdatePassword(event) {
    this.setState({ inputPassword: [event.target.value] })
  },

  render() {
    return (
      <Login
      onSubmit={this.handleLoginSubmit}
      onUpdateEmail={this.handleUpdateEmail}
      onUpdatePassword={this.handleUpdatePassword}
      />
    )
  }
});

export default LoginContainer;
