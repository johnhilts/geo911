var React = require('react');
var Login = require('../components/Login');

var LoginContainer = React.createClass({
  handleRegisterSubmit: function(event) {
    event.preventDefault();

    alert("Login!")
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
        onSubmit={this.handleRegisterSubmit}
        onUpdateEmail={this.handleUpdateEmail}
        onUpdatePassword={this.handleUpdatePassword}
      />
    )
  }
});

module.exports = LoginContainer;
