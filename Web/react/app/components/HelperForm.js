var React = require('react');

var HelperForm = function(props) {
  var helper = (props.helper ? Object.assign({}, props.helper) : ({'theName': props.theName, 'callNumber': props.callNumber, 'isRed': props.isRed,
    'isYellow': props.isYellow, }));
  var hiddenHelperKey = <input type="hidden" value={helper.key} />
  var helperIndex = props.helper ? props.helper.key : -1;
  var isRedOnChange = !props.isAdd && props.onUpdateIsRed ? props.onUpdateIsRed.bind(null, helperIndex) : null;
  var isRedId = "isRed" + (!props.isAdd ? helper.key : 0).toString();
  var isYellowOnChange = !props.isAdd && props.onUpdateIsYellow ? props.onUpdateIsYellow.bind(null, helperIndex) : null;
  var isYellowId = "isYellow" + (!props.isAdd ? helper.key : 0).toString();
  var buttonText = props.isAdd ? "Add" : "Update";
  var addUpdateButton = props.blockEdit
    ? <span />
    : <input type="submit" value={buttonText} className="btn btn-info" style={{marginLeft:10, marginTop: 10, marginBottom: 10, marginRight: 10, }} />;
  var removeButton = !props.isAdd && props.onDeleteHelper
    ? <input type="button" value="Delete" className="btn btn-danger" onClick={props.onDeleteHelper.bind(null, helperIndex)}
        style={{marginLeft:10, marginTop: 10, marginBottom: 10, marginRight: 10, }} />
    : <span />;
  var closeLink = !props.isAdd
    ? <a onClick={props.onHelperShowOnly.bind(null, helperIndex)} style={{float: 'right',}}>close</a>
    : <span />
  return (
      <div>
        {closeLink}
        <form onSubmit={props.onSubmit}>
          <input defaultValue={helper.theName} onChange={props.onUpdateTheName} data-helper-key={helper.key} placeholder="enter a name" /><br />
          <br />
          <input defaultValue={helper.callNumber} onChange={props.onUpdateCallNumber} data-helper-key={helper.key} placeholder="enter number" />
          <br />
          <label htmlFor={isRedId}>Send Red Alert</label>&nbsp;
          <input id={isRedId} type="checkbox" checked={helper.isRed} onChange={isRedOnChange} />
          &nbsp;&nbsp;
          <label htmlFor={isYellowId}>Send Yellow Alert</label>&nbsp;
          <input id={isYellowId} type="checkbox" checked={helper.isYellow} onChange={isYellowOnChange} />
          {hiddenHelperKey}
          {addUpdateButton}
          {removeButton}
        </form>
      </div>
  )
}

module.exports = HelperForm;
