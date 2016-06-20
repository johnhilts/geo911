var React = require('react');
var ListHelpers = require('./ListHelpers');

var Help = function(props) {
  return (
    <div>
      <div>
        <button className="btn btn-error" onClick={props.onRedClick}>Red Alert!</button>
      </div>
      <div>&nbsp;</div>
      <div>
        <button className="btn btn-warning" onClick={props.onYellowClick}>Yellow Alert!</button>
      </div>
      <div>
        <ListHelpers helpers={props.helpers} />
      </div>
    </div>
  );
}

module.exports = Help;
