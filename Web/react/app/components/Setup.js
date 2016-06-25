var React = require('react');
var ListHelpers = require('./ListHelpers');

function SetupHelpers(props) {
  return (
    <div style={{marginLeft:20,marginTop:20,marginBottom:20,}}>
      <p>Add a number to text</p>
      <form onSubmit={props.onSubmit}>
        <input value={props.theName} onChange={props.onUpdateTheName} placeholder="enter a name" /><br />
        <br />
        <input value={props.callNumber} onChange={props.onUpdateCallNumber} placeholder="enter number" />
        <input type="submit" value="Add" className="btn btn-info" style={{marginLeft:10,marginTop: 10,marginBottom: 10, marginRight: 10}} />
      </form>
      <div>&nbsp;</div>
      <ListHelpers helpers={props.helpers} />
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
