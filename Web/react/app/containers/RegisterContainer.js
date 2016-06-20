var React = require('react');
var ReactRouter = require('react-router');
var Rebase = require('re-base');
var base = Rebase.createClass('https://geo911-help-rescue-me.firebaseio.com/');
var Register = require('../components/Register');

var RegisterContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			'users': {},
		}
	},

	// NOTE: componentDidMount is used to initialize a component with server-side info
	// fore more info, see react docs: https://facebook.github.io/react/docs/component-specs.html
	componentDidMount : function() {
		this.ref = base.syncState('users', {
			context : this,
			state : 'users',
		});
	},

	componentWillUnmount: function() {
		base.removeBinding(this.ref);
	},

  handleRegisterSubmit: function(event) {
    event.preventDefault();

		var timestamp = (new Date()).getTime();
    var user = {
      key: 'user-' + timestamp,
      userName: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

		this.state.users[user.key] = user;

    this.setState({ users : this.state.users});

    this.props.onAuthorize(user);

    this.context.router.push('/');
  },

	handleUpdateUserName: function(event) {
    this.setState({ inputUserName: [event.target.value] })
	},

	handleUpdateEmail: function(event) {
    this.setState({ inputEmail: [event.target.value] })
	},

	handleUpdatePassword: function(event) {
    this.setState({ inputPassword: [event.target.value] })
	},

  render: function() {
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

module.exports = RegisterContainer;
