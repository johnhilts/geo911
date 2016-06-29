var React = require('react');
var HelperForm = require('./HelperForm');

function ItemHelper(props) {
  var helper = props.helper;
  var helperInfo = helper.theName + ' (' + helper.callNumber + ')';
  if (helperInfo.length > 17) {
    helperInfo = helperInfo.substring(0, 17) + '...';
  }
  var updateForm = props.canUpdate
  ?
      <div data-helper-key={'div' + helper.key} style={{display: 'none',}}>
        <HelperForm {...props} isAdd={false} helper={helper} onSubmit={props.onUpdateHelper} onHelperShowOnly={props.onHelperShowOnly} />
      </div>
  : <span />
  return (
    <li className="list-group-item">
      <a href="#" onClick={props.onHelperClick} data-helper-key={'a' + helper.key}>
        {helperInfo.substring(0, 20)}
      </a>
      {updateForm}
    </li>
  )
}

function HelperPanel(props) {
  var helpers = props.helpers;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{props.heading}</div>
      <div className="panel-body">
        <p>{props.prompt}</p>
      </div>
      <ul className="list-group">
        {Object.keys(helpers).map(function (key) {
          return <ItemHelper
                    key={key}
                    helper={helpers[key]}
                    onHelperClick={props.onHelperClick}
                    onHelperShowOnly={props.onHelperShowOnly}
                    onUpdateHelper={props.onUpdateHelper}
                    onUpdateTheName={props.onUpdateTheName}
                    onUpdateCallNumber={props.onUpdateCallNumber}
                    canUpdate={props.canUpdate}
                  />
        })}
      </ul>
    </div>
  )
}

function ListHelpers(props){
  var helpers = props.helpers;
  if (helpers) {
    return (
      <div className="row">
        <div className="row col-sm-5">
          <HelperPanel
            heading="Helpers you have previously added:"
            prompt="Please add up to 3 helpers here"
            helpers={helpers}
            onHelperClick={props.onHelperClick}
            onHelperShowOnly={props.onHelperShowOnly}
            onUpdateHelper={props.onUpdateHelper}
            onUpdateTheName={props.onUpdateTheName}
            onUpdateCallNumber={props.onUpdateCallNumber}
            canUpdate={true}
            />
        </div>
        <div className="col-sm-1">&nbsp;</div>
        <div className="row col-sm-5">
          <HelperPanel
            heading="Red Alert Helper"
            prompt="Please pre-select a helper for red alerts by clicking on 1 of the numbers in the list on the left"
            helpers={helpers.filter(function(helper) {return helper.isRed;})}
            onHelperClick={props.onHelperClick}
          />
          <HelperPanel
            heading="Yellow Alert Helper"
            prompt="Please pre-select a helper for yellow alerts by clicking on 1 of the numbers in the list on the left"
            helpers={helpers.filter(function(helper) {return helper.isYellow;})}
            onHelperClick={props.onHelperClick}
          />
        </div>
      </div>
    )
  } else {
    return <div>Please add up to 3 helpers here</div>
  }
}

module.exports = ListHelpers;
