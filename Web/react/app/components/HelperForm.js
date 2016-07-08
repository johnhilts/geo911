import React from 'react';

const getFormInfo = (props) => {
  let helper = (props.helper ? Object.assign({}, props.helper) : ({'theName': props.theName, 'callNumber': props.callNumber, 'isRed': props.isRed,
    'isYellow': props.isYellow, }));
  let buttonText = props.isAdd ? "Add" : "Update";
  let helperIndex = props.helper ? props.helper.key : -1;
  let readOnly = !props.onSubmit;
  return (
    {
      helper: helper,
      hiddenHelperKey: <input type="hidden" value={helper.key} />,
      helperIndex: helperIndex,
      readOnly: readOnly,
      isRedOnChange: !props.isAdd && !readOnly ? props.onUpdateIsRed.bind(null, helperIndex) : null,
      isRedId: "isRed" + (!props.isAdd ? helper.key : 0).toString(),
      isYellowOnChange: !props.isAdd && !readOnly ? props.onUpdateIsYellow.bind(null, helperIndex) : null,
      isYellowId: "isYellow" + (!props.isAdd ? helper.key : 0).toString(),
      buttonText: buttonText,
      addUpdateButton: props.blockEdit
        ? <span />
        : <input type="submit" value={buttonText} className="btn btn-info" style={{marginLeft:10, marginTop: 10, marginBottom: 10, marginRight: 10, }} />,
      removeButton: !props.isAdd && !readOnly
        ? <input type="button" value="Delete" className="btn btn-danger" onClick={props.onDeleteHelper.bind(null, helperIndex)}
            style={{marginLeft:10, marginTop: 10, marginBottom: 10, marginRight: 10, }} />
        : <span />,
      closeLink: !props.isAdd
        ? <a onClick={props.onHelperShowOnly.bind(null, helperIndex)} style={{float: 'right',}}>close</a>
        : <span />,
    }
  )
};

export default function HelperForm(props) {
  let formInfo = getFormInfo(props);
  let helper = formInfo.helper;
  return (
      <div>
        {formInfo.closeLink}
        <form onSubmit={props.onSubmit}>
          <input defaultValue={helper.theName} onChange={props.onUpdateTheName} data-helper-key={helper.key} placeholder="enter a name" /><br />
          <br />
          <input defaultValue={helper.callNumber} onChange={props.onUpdateCallNumber} data-helper-key={helper.key} placeholder="enter number" />
          <br />
          <label htmlFor={formInfo.isRedId}>Send Red Alert</label>&nbsp;
          <input id={formInfo.isRedId} type="checkbox" checked={helper.isRed} onChange={formInfo.isRedOnChange} readOnly={formInfo.readOnly} />
          &nbsp;&nbsp;
          <label htmlFor={formInfo.isYellowId}>Send Yellow Alert</label>&nbsp;
          <input id={formInfo.isYellowId} type="checkbox" checked={helper.isYellow} onChange={formInfo.isYellowOnChange} readOnly={formInfo.readOnly} />
          {formInfo.hiddenHelperKey}
          {formInfo.addUpdateButton}
          {formInfo.removeButton}
        </form>
      </div>
  )
}
