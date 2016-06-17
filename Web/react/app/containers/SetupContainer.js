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
		this.state.helpers['helper-' + timestamp] = event.target[0].value;
		// set the state
		this.setState({ fishes : this.state.helpers });
		// alert('You added ' + this.state.helpers[0]);
  },

	handleUpdateNumber: function(event) {
    this.setState({
        helpers: [event.target.value]
      })
	},

  handleHelpClick: function(event) {

    this.context.router.push({
      pathname: '/help',
      state: {
        helpers: ['test']
      }
    })

  },

  render: function() {
    return (
      <Setup
        onSubmit={this.handleSubmit}
        onUpdateNumber={this.handleUpdateNumber}
        onHelpClick={this.handleHelpClick}
      />
    )
  }
});

module.exports = SetupContainer;
