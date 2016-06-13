var React = require('react');

var Setup = function(props) {
  return (
    <div>
      <p>This is the setup screen</p>
      <button onClick={props.onHelpClick}>Return</button>
    </div>
  )
}

module.exports = Setup;
