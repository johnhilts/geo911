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
			'helpers': {}
		}
	},

	// NOTE: componentDidMount is used to initialize a component with server-side info
	// fore more info, see react docs: https://facebook.github.io/react/docs/component-specs.html
	componentDidMount : function() {
		base.syncState('noname/helpers', {
			context : this,
			state : 'helpers'
		});
	},

  handleSubmit: function(event) {
		event.preventDefault();

		var timestamp = (new Date()).getTime();
		var helper = {key: 'helper-' + timestamp, callNumber: event.target[0].value};

		this.state.helpers[helper.key] = helper;

		// set the state
		this.setState({ helpers : this.state.helpers });
  },

	handleUpdateNumber: function(event) {
    this.setState({
        inputHelper: [event.target.value]
      })
	},

  handleHelpClick: function(event) {

    this.context.router.push({
      pathname: '/help',
      state: {
        helpers: this.state.helpers
      }
    })

  },

  render: function() {
    return (
			<div>
	      <Setup
					helpers={this.state.helpers}
	        onSubmit={this.handleSubmit}
	        onUpdateNumber={this.handleUpdateNumber}
	        onHelpClick={this.handleHelpClick}
	      />
			</div>
    )
  }
});

module.exports = SetupContainer;
