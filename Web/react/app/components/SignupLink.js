var React = require('react');
var Link = require('react-router').Link;

function SignupLink(props) {
  return (<Link to='/register'>Sign Up</Link>);
}

module.exports = SignupLink;
