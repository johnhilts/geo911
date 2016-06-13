var React = require('react');

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
    </div>
  );
}

module.exports = Help;
