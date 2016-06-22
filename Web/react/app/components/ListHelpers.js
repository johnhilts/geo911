var React = require('react');

function ItemHelper(props) {
  var helperInfo = props.helper.theName + ' (' + props.helper.callNumber + ')';
  if (helperInfo.length > 17) {
    helperInfo = helperInfo.substring(0, 17) + '...';
  }
  return (
    <li className="list-group-item">
      {helperInfo.substring(0, 20)}
    </li>
  )
}

function ListHelpers(props){
  var helpers = props.helpers;
  if (helpers) {
    return (
      <div className="row">
        <div className="panel panel-default col-sm-5">
          <div className="panel-heading">Helpers you have previously added:</div>
          <div className="panel-body">
            <p>Please add up to 3 helpers here</p>
          </div>
          <ul className="list-group">
            {Object.keys(helpers).map(function (key) {
              return <ItemHelper key={key} helper={helpers[key]}  />
            })}
          </ul>
        </div>
        <div className="col-sm-1">&nbsp;</div>
        <div className="panel panel-default col-sm-5">
          <div className="panel-heading">Red Helper</div>
          <div className="panel-body">
            <p>Please pre-select a helper for red alerts by clicking on 1 of the numbers in the list on the left</p>
          </div>
          <ul className="list-group">
            {Object.keys(helpers).map(function (key) {
              return <ItemHelper key={key} helper={helpers[key]}  />
            })}
          </ul>
        </div>
      </div>
    )
  } else {
    return <div>Please add up to 3 helpers here</div>
  }
}

module.exports = ListHelpers;
