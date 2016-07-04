var React = require('react');
var HelperForm = require('./HelperForm');
var ListHelpers = require('./ListHelpers');
var Constants = require('../core/constants');

function BlockEdit(props) {
  return (
    <div style={{marginLeft:20,marginTop:20,marginBottom:20,}}>
      <p style={{background: 'red',}}>You have more than {Constants.MaxHelpers} helpers. Please delete excess helpers.</p>
      <div>&nbsp;</div>
      <ListHelpers
        helpers={props.helpers}
        onHelperClick={props.onHelperClick}
        onHelperShowOnly={props.onHelperShowOnly}
        onDeleteHelper={props.onDeleteHelper}
        blockEdit={true}
        />
    </div>
  )
}

function SetupHelpers(props) {
  var blockEdit = props.helpers.length > Constants.MaxHelpers;
  if (blockEdit) {
    return (
      <BlockEdit
        helpers={props.helpers}
        onHelperClick={props.onHelperClick}
        onHelperShowOnly={props.onHelperShowOnly}
        onDeleteHelper={props.onDeleteHelper}
        />
    )
  } else {
    var addForm = props.helpers.length < Constants.MaxHelpers
    ? <div>
        <p>Add a number to text</p>
        <HelperForm {...props} isAdd={true} onSubmit={props.onAddHelper} />
        <div>&nbsp;</div>
      </div>
    : <span />
    return (
      <div style={{marginLeft:20,marginTop:20,marginBottom:20,}}>
        {addForm}
        <ListHelpers
          helpers={props.helpers}
          onHelperClick={props.onHelperClick}
          onHelperShowOnly={props.onHelperShowOnly}
          onUpdateHelper={props.onUpdateHelper}
          onUpdateTheName={props.onUpdateTheName}
          onUpdateCallNumber={props.onUpdateCallNumber}
          onUpdateIsRed={props.onUpdateIsRed}
          onUpdateIsYellow={props.onUpdateIsYellow}
          onDeleteHelper={props.onDeleteHelper}
          />
      </div>
    )
  }
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
