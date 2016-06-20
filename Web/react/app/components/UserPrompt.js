var React = require('react');
var LoginLink = require('./LoginLink');
var SignupLink = require('./SignupLink');
var UserInfoLink = require('./UserInfoLink');
var LogoffLink = require('./LogoffLink');

function UserPrompt (props) {
    return (
      props.user.key === 0
      ?
      <p>
        <LoginLink />
        &nbsp;or&nbsp;
        <SignupLink />
      </p>
      :
      <div>
          <UserInfoLink user={props.user} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <LogoffLink onDeauthorize={props.onDeauthorize} />
      </div>
    );
  }

module.exports = UserPrompt;
