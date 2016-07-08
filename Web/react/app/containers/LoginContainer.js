import React from 'react';
import ReactRouter from 'react-router';
import Rebase from 're-base';
var base = Rebase.createClass('https://geo911-help-rescue-me.firebaseio.com/');
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

  handleLoginSubmit(event) {
    event.preventDefault();

    this.setState({password: event.target[1].value});

		this.ref = base.fetch('users', {
			context : this,
			asArray : true,
      queries: {
        orderByChild: 'email',
        equalTo: event.target[0].value,
      },
      then(users) {
        if (!users && !users.length) {
          alert('Login Failed');
          return;
        }
        var user = users[0];
        if (user.password !== this.state.password) {
          alert('invalid email or password');
          return;
        }

        // re-read helpers asArray since above asArray doesn't seem to extend to nested objects
        this.ref = base.fetch('users/' + user.key + '/helpers', {
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
