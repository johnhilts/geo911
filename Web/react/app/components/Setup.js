var React = require('react');

function ItemHelper(props) {
    return (
      <li>
        {props.helper.callNumber}
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

var Setup = function(props) {
  return (
    <div>
      <p>This is the setup screen</p>
      <ListHelpers helpers={props.helpers} />
      <p>Add a number to text</p>
      <form onSubmit={props.onSubmit}>
        <input value={props.callNumber} onChange={props.onUpdateNumber} placeholder="enter number" />
        <input type="submit" value="Add" />
      </form>
      <button onClick={props.onHelpClick}>Return</button>
    </div>
  )
}

module.exports = Setup;
