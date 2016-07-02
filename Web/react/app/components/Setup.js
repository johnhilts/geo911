var React = require('react');
var HelperForm = require('./HelperForm');
var ListHelpers = require('./ListHelpers');

function SetupHelpers(props) {
  return (
    <div style={{marginLeft:20,marginTop:20,marginBottom:20,}}>
      <p>Add a number to text</p>
      <HelperForm {...props} isAdd={true} onSubmit={props.onAddHelper} />
      <div>&nbsp;</div>
      <ListHelpers
        helpers={props.helpers}
        onHelperClick={props.onHelperClick}
        onHelperShowOnly={props.onHelperShowOnly}
        onUpdateHelper={props.onUpdateHelper}
        onUpdateTheName={props.onUpdateTheName}
        onUpdateCallNumber={props.onUpdateCallNumber}
        onDeleteHelper={props.onDeleteHelper}
        />
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
