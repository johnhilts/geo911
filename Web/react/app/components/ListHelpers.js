var React = require('react');
var HelperForm = require('./HelperForm');
var Constants = require('../core/constants');

function UpdateForm(props) {
  return (
    props.canUpdate
    ?
    <div data-helper-key={'div' + props.helper.key} style={{display: 'none',}}>
      <HelperForm {...props}
        isAdd={false}
        helper={props.helper}
        onSubmit={props.onUpdateHelper}
        onHelperShowOnly={props.onHelperShowOnly}
        onDeleteHelper={props.onDeleteHelper}
        blockEdit={props.blockEdit}
        />
    </div>
    : <span />
  )
}

function HelperItem(props) {
  var helper = props.helper;
  var helperInfo = helper.theName + ' (' + helper.callNumber + ')';
  if (helperInfo.length > 17) {
    helperInfo = helperInfo.substring(0, 17) + '...';
  }

  var displayHelperInfo = helperInfo.substring(0, 20);
  return (
    props.isFiltered
    ? <span>{displayHelperInfo}</span>
    : <div>
        <a href="#" onClick={props.onHelperClick} data-helper-key={'a' + helper.key}>
          {displayHelperInfo}
        </a>
        <UpdateForm {...props} />
      </div>
  )
}

function ItemHelper(props) {
  return (
    <li className="list-group-item">
      <HelperItem {...props} />
    </li>
    );
}

function HelperPanel(props) {
  var helpers = props.helpers;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{props.heading}</div>
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
                    onUpdateIsRed={props.onUpdateIsRed}
                    onUpdateIsYellow={props.onUpdateIsYellow}
                    canUpdate={props.canUpdate}
                    onDeleteHelper={props.onDeleteHelper}
                    isFiltered={props.isFiltered}
                    blockEdit={props.blockEdit}
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
        <div className="row col-sm-5" style={{'display': props.onlyShowFlaggedHelpers ? 'none' : 'block',}}>
          <HelperPanel
            heading={"Helpers you have previously added - you can add up to " + Constants.MaxHelpers}
            helpers={helpers}
            onHelperClick={props.onHelperClick}
            onHelperShowOnly={props.onHelperShowOnly}
            onUpdateHelper={props.onUpdateHelper}
            onUpdateTheName={props.onUpdateTheName}
            onUpdateCallNumber={props.onUpdateCallNumber}
            onUpdateIsRed={props.onUpdateIsRed}
            onUpdateIsYellow={props.onUpdateIsYellow}
            canUpdate={true}
            onDeleteHelper={props.onDeleteHelper}
            blockEdit={props.blockEdit}
            />
        </div>
        <div className="col-sm-1">&nbsp;</div>
        <div className="row col-sm-5">
          <HelperPanel
            heading="Red Alert Helper"
            helpers={helpers.filter(function(helper) {return helper.isRed;})}
            isFiltered={true}
          />
          <HelperPanel
            heading="Yellow Alert Helper"
            helpers={helpers.filter(function(helper) {return helper.isYellow;})}
            isFiltered={true}
          />
        </div>
      </div>
    )
  } else {
    return <div>Please add up to {Constants.MaxHelpers} helpers here</div>
  }
}

module.exports = ListHelpers;
