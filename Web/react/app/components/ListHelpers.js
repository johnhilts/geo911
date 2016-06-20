var React = require('react');

function ItemHelper(props) {
  var helperInfo = props.helper.theName + ' (' + props.helper.callNumber + ')';
  if (helperInfo.length > 17) {
    helperInfo = helperInfo.substring(0, 17) + '...';
  }
  return (
    <li>
      {helperInfo.substring(0, 20)}
    </li>
  )
}

function ListHelpers(props){
  var helpers = props.helpers;
  if (helpers) {
    return (
      <div>
        Helpers you have previously added:<br />
        <ul>
          {Object.keys(helpers).map(function (key) {
            return <ItemHelper key={key} helper={helpers[key]}  />
          })}
        </ul>
    </div>
  )
  } else {
    return <div>Please add up to 3 helpers here</div>
  }
}

module.exports = ListHelpers;
