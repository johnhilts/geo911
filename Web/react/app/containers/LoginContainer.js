var React = require('react');
var ReactRouter = require('react-router');
var Rebase = require('re-base');
var base = Rebase.createClass('https://geo911-help-rescue-me.firebaseio.com/');
var Login = require('../components/Login');

var LoginContainer = React.createClass({

  // NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      'users': {},
      'password': '',
    }
  },

  handleLoginSubmit: function(event) {
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
        }

        this.props.onAuthorize(user.key);

        this.context.router.push('/');
      },
		});
  },

  handleUpdateEmail: function(event) {
    this.setState({ inputEmail: [event.target.value] })
  },

  handleUpdatePassword: function(event) {
    this.setState({ inputPassword: [event.target.value] })
  },

  render: function() {
    return (
      <Login
      onSubmit={this.handleLoginSubmit}
      onUpdateEmail={this.handleUpdateEmail}
      onUpdatePassword={this.handleUpdatePassword}
      />
    )
  }
});

module.exports = LoginContainer;
