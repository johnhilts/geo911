var React = require('react');
var Link = require('react-router').Link;

function LoginLink(props) {
  return (<Link to="/login">Sign In</Link>);
}

module.exports = LoginLink;
