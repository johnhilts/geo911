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
import Register from '../components/Register';

const RegisterContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			'users': {},
		}
	},

	// NOTE: componentDidMount is used to initialize a component with server-side info
	// fore more info, see react docs: https://facebook.github.io/react/docs/component-specs.html
	componentDidMount() {
		this.ref = base.syncState('users', {
			context : this,
			state : 'users',
		});
	},

	componentWillUnmount() {
		base.removeBinding(this.ref);
	},

  handleRegisterSubmit(event) {
    event.preventDefault();

		let timestamp = (new Date()).getTime();
    let user = {
      key: 'user-' + timestamp,
      userName: event.target[0].value,
      email: event.target[1].value,
    };
		let password = event.target[2].value;

		base.createUser({
			email: user.email,
			password: password,
		}, this.createUserSuccess.bind(null, user));

  },

	createUserSuccess: function(user, d) {
		this.state.users[user.key] = user;

    this.setState({ users : this.state.users});

    this.props.onAuthorize(user);

    this.context.router.push('/');
	},

	handleUpdateUserName(event) {
    this.setState({ inputUserName: [event.target.value] })
	},

	handleUpdateEmail(event) {
    this.setState({ inputEmail: [event.target.value] })
	},

	handleUpdatePassword(event) {
    this.setState({ inputPassword: [event.target.value] })
	},

  render() {
    return (
      <Register
        onSubmit={this.handleRegisterSubmit}
        onUpdateUserName={this.handleUpdateUserName}
        onUpdateEmail={this.handleUpdateEmail}
        onUpdatePassword={this.handleUpdatePassword}
      />
    )
  }
});

export default RegisterContainer;
