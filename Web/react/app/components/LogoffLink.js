var React = require('react');

function LogoffLink(props) {
  return (<a href="/" onClick={props.onDeauthorize} >Sign Out</a>);
}

module.exports = LogoffLink;
