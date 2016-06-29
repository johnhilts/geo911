var React = require('react');
var ListHelpers = require('./ListHelpers');

var Help = function(props) {
  return (
    <div>
      <div className="col-sm-12 row">
        <div className="col-sm-4">&nbsp;</div>
        <div className="col-sm-4">
          <button className="btn btn-danger" onClick={props.onRedClick}>Red Alert!</button>
        </div>
        <div className="col-sm-4">&nbsp;</div>
      </div>
      <div className="col-sm-12">&nbsp;</div>
      <div className="col-sm-12 row">
        <div className="col-sm-4">&nbsp;</div>
        <div className="col-sm-4">
          <button className="btn btn-warning" onClick={props.onYellowClick}>Yellow Alert!</button>
        </div>
        <div className="col-sm-4">&nbsp;</div>
      </div>
      <div className="col-sm-12">&nbsp;</div>
      <div>
        <ListHelpers helpers={props.helpers} onHelperClick={props.onHelperClick} onHelperShowOnly={props.onHelperShowOnly} />
      </div>
    </div>
  );
}

module.exports = Help;
