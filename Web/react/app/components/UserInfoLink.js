var React = require('react');
var Link = require('react-router').Link;

function UserInfoLink(props) {
  return (
    <span>
      <Link to="/">Welcome, {props.user.userName}</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/setup">Setup</Link>
    </span>
  )
}

module.exports = UserInfoLink;
