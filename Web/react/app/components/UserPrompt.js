var React = require('react');
var LoginLink = require('./LoginLink');
var SignupLink = require('./SignupLink');

function UserPrompt (props) {
    return (
      <p>
        <LoginLink />
        &nbsp;or&nbsp;
        <SignupLink />
      </p>
    );
  }

module.exports = UserPrompt;
