var React = require('react');
var Register = require('../components/Register');

var RegisterContainer = React.createClass({

  handleRegisterSubmit: function(event) {
    event.preventDefault();

    alert("Register!")
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
