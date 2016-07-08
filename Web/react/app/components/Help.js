import React from 'react';
import ListHelpers from './ListHelpers';

const RenderAlert = (props) => {
  var buttonClassName = '';
  var buttonText = '';
  var onClick = null;
  switch (props.buttonType) {
    case 'Red':
    buttonClassName = 'btn btn-danger';
    buttonText = "Red Alert!";
    onClick = props.onRedClick;
    break;
    case 'Yellow':
    buttonClassName = 'btn btn-warning';
    buttonText = "Yellow Alert!";
    onClick = props.onYellowClick;
    break;
  }
  return (
    <div className="col-sm-12 row">
      <div className="col-sm-4">&nbsp;</div>
      <div className="col-sm-4">
        <button className={buttonClassName} onClick={onClick}>{buttonText}</button>
      </div>
      <div className="col-sm-4">&nbsp;</div>
    </div>
  )
}

export default function Help(props) {
  return (
    <div>
      <RenderAlert {...props} buttonType='Red' />
      <div className="col-sm-12">&nbsp;</div>
      <RenderAlert {...props} buttonType='Yellow' />
      <div className="col-sm-12">&nbsp;</div>
      <div>
        <ListHelpers helpers={props.helpers} onHelperClick={props.onHelperClick} onHelperShowOnly={props.onHelperShowOnly} onlyShowFlaggedHelpers={true} />
      </div>
    </div>
  );
}
