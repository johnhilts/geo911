var React = require('react');
var ReactRouter = require('react-router');
var Rebase = require('re-base');
var base = Rebase.createClass('https://geo911-help-rescue-me.firebaseio.com/');
var Setup = require('../components/Setup');

var SetupContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			'helpers': {},
			isLoading: true,
		}
	},

	// NOTE: componentDidMount is used to initialize a component with server-side info
	// fore more info, see react docs: https://facebook.github.io/react/docs/component-specs.html
	componentDidMount : function() {
		this.ref = base.syncState('users/' + this.props.user.key + '/helpers', {
			context : this,
			state : 'helpers',
			asArray: true,
			then(d) {
				this.setState({isLoading: false,});
			},
		});
	},

	componentWillUnmount: function() {
		base.removeBinding(this.ref);
	},

	setupFields : {theName: 0, callNumber: 1, isRed: 2, isYellow: 3, key: 4, },

  handleAddHelper: function(event) {
		event.preventDefault();

		var timestamp = (new Date()).getTime();
		var helper = {key: 'helper-' + timestamp, theName: event.target[this.setupFields.theName].value, callNumber: event.target[this.setupFields.callNumber].value,
			isRed: event.target[this.setupFields.isRed].checked, isYellow: event.target[this.setupFields.isYellow].checked, };

		this.state.helpers[helper.key] = helper;

		if (helper.isRed || helper.isYellow) {
			this.unsetOtherFlags(this.state.helpers, helper.key, helper.isRed, helper.isYellow);
		}

		this.setState({ helpers : this.state.helpers });
		this.props.onSaveHelpers(this.state.helpers);

		event.target.reset();
  },

  handleUpdateHelper: function(event) {
		event.preventDefault();

		var helper = {key: event.target[this.setupFields.key].value,
			theName: event.target[this.setupFields.theName].value, callNumber: event.target[this.setupFields.callNumber].value,
			isRed: event.target[this.setupFields.isRed].checked, isYellow: event.target[this.setupFields.isYellow].checked, };

		// NOTE: helpers is read back as an array from firebase, so can't access it the same way as when adding
		var helperIndex = this.state.helpers.findIndex(function(h) { return h.key == helper.key;} );
		this.state.helpers[helperIndex] = helper;

		if (helper.isRed || helper.isYellow) {
			this.unsetOtherFlags(this.state.helpers, helper.key, helper.isRed, helper.isYellow);
		}

		this.setState({ helpers : this.state.helpers });
		this.props.onSaveHelpers(this.state.helpers);

		this.props.onHelperShowOnly(helperIndex);
  },

  handleDeleteHelper: function(helperKey, event) {
		event.preventDefault();

		// NOTE: helpers is read back as an array from firebase, so can't access it the same way as when adding
		var helperIndex = this.state.helpers.findIndex(function(h) { return h.key == helperKey;} );
		this.state.helpers.splice(helperIndex, 1);

		this.setState({ helpers : this.state.helpers });
		this.props.onSaveHelpers(this.state.helpers);

		this.props.onHelperShowOnly(helperIndex);
  },

	unsetOtherFlags: function (helpers, helperIndex, isRed, isYellow) {
		var unsetOtherFlag = function(helperIndex, flagName) {
			helpers.forEach(function(h) {
				if (h.key !== helperIndex) {
					h[flagName] = false;
				}
			});
		};
		if (isRed) {
			unsetOtherFlag(helperIndex, 'isRed');
		}
		if (isYellow) {
			unsetOtherFlag(helperIndex, 'isYellow');
		}
	},

	handleUpdateTheName: function(event) {
		this.setState({
			inputHelperName: [event.target.value]
		})
	},

	handleUpdateCallNumber: function(event) {
    this.setState({
        inputHelperNumber: [event.target.value]
      })
	},

	handleUpdateIsRed: function(helperIndex, event) {
		this.state.helpers[helperIndex].isRed = event.target.checked;
    this.setState({
        helpers: this.state.helpers,
      })
	},

	handleUpdateIsYellow: function(helperIndex, event) {
		this.state.helpers[helperIndex].isYellow = event.target.checked;
    this.setState({
        helpers: this.state.helpers,
      })
	},

  render: function() {
    return (
			<div>
	      <Setup
					helpers={this.state.helpers}
					isLoading={this.state.isLoading}
	        onAddHelper={this.handleAddHelper}
	        onUpdateHelper={this.handleUpdateHelper}
	        onUpdateTheName={this.handleUpdateTheName}
	        onUpdateCallNumber={this.handleUpdateCallNumber}
	        onUpdateIsRed={this.handleUpdateIsRed}
	        onUpdateIsYellow={this.handleUpdateIsYellow}
					onHelperClick={this.props.onHelperClick}
					onHelperShowOnly={this.props.onHelperShowOnly}
					onDeleteHelper={this.handleDeleteHelper}
	      />
			</div>
    )
  }
});

module.exports = SetupContainer;
