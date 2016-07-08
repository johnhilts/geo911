import React from 'react';
import HelperForm from './HelperForm';
import ListHelpers from './ListHelpers';
import * as Constants from '../core/constants';

const BlockEdit = (props) => {
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

const AddForm = (props) => {
    return (
      props.helpers.length < Constants.MaxHelpers
      ? <div>
          <p>Add a number to text</p>
          <HelperForm {...props} isAdd={true} onSubmit={props.onAddHelper} />
          <div>&nbsp;</div>
        </div>
      : <span />
    )
}

const SetupHelpers = (props) => {
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
    return (
      <div style={{marginLeft:20,marginTop:20,marginBottom:20,}}>
        <AddForm {...props} />
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

export default function Setup (props) {
  return (
    props.isLoading
    ?
    <div style={{background: 'red',}}>L O A D I N G ...</div>
    :
    <SetupHelpers {...props} />
  )
}
