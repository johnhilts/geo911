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

  handleSubmit: function(event) {
		event.preventDefault();

		var timestamp = (new Date()).getTime();
		var helper = {key: 'helper-' + timestamp, theName: event.target[0].value, callNumber: event.target[1].value,
			isRed: event.target[2].checked, isYellow: event.target[3].checked, };

		this.state.helpers[helper.key] = helper;

		this.setState({ helpers : this.state.helpers });
		this.props.onSaveHelpers(this.state.helpers);

		event.target.reset();
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

  render: function() {
    return (
			<div>
	      <Setup
					helpers={this.state.helpers}
					isLoading={this.state.isLoading}
	        onSubmit={this.handleSubmit}
	        onUpdateTheName={this.handleUpdateTheName}
	        onUpdateCallNumber={this.handleUpdateCallNumber}
	      />
			</div>
    )
  }
});

module.exports = SetupContainer;
