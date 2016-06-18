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

function SetupHelpers(props) {
  return (
    <div>
      <p>This is the setup screen</p>
      <ListHelpers helpers={props.helpers} />
      <p>Add a number to text</p>
      <form onSubmit={props.onSubmit}>
        <input value={props.theName} onChange={props.onUpdateTheName} placeholder="enter a name" /><br />
        <br />
        <input value={props.callNumber} onChange={props.onUpdateCallNumber} placeholder="enter number" />
        <input type="submit" value="Add" />
      </form>
      <button onClick={props.onHelpClick}>Return</button>
    </div>
  )
}

var Setup = function(props) {
  return (
    props.isLoading
    ?
    <div style={{background: 'red',}}>L O A D I N G ...</div>
    :
    <SetupHelpers {...props} />
  )
}

module.exports = Setup;
