var React = require('react');
var ListHelpers = require('./ListHelpers');

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
