var React = require('react');

var HelperForm = function(props) {
  var buttonText = props.isAdd ? "Add" : "Update";
  var helper = (props.helper ? Object.assign({}, props.helper) : ({'theName': props.theName, 'callNumber': props.callNumber, 'isRed': props.isRed,
    'isYellow': props.isYellow, }));
  var removeButton = !props.isAdd
    ? <input type="submit" value="Delete" className="btn btn-danger" style={{marginLeft:10, marginTop: 10, marginBottom: 10, marginRight: 10, }} />
    : <span />;
  var hiddenHelperKey = <input type="hidden" value={helper.key} />
  var helperIndex = props.helper ? props.helper.key : -1;
  return (
      <div>
        <a onClick={props.onHelperShowOnly.bind(null, helperIndex)} style={{float: 'right',}}>cancel</a>
        <form onSubmit={props.onSubmit}>
          <input defaultValue={helper.theName} onChange={props.onUpdateTheName} data-helper-key={helper.key} placeholder="enter a name" /><br />
          <br />
          <input defaultValue={helper.callNumber} onChange={props.onUpdateCallNumber} data-helper-key={helper.key} placeholder="enter number" />
          <br />
          <label htmlFor="isRed">Send Red Alert</label>&nbsp;
          <input id="isRed" type="checkbox" defaultChecked={helper.isRed} />
          &nbsp;&nbsp;
          <label htmlFor="isYellow">Send Yellow Alert</label>&nbsp;
          <input id="isYellow" type="checkbox" defaultChecked={helper.isYellow} />
          {hiddenHelperKey}
          <input type="submit" value={buttonText} className="btn btn-info" style={{marginLeft:10, marginTop: 10, marginBottom: 10, marginRight: 10, }} />
          {removeButton}
        </form>
      </div>
  )
}

module.exports = HelperForm;
