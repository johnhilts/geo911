var React = require('react');
var ReactRouter = require('react-router');
var Setup = require('../components/Setup');

var SetupContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  handleHelpClick: function(e) {

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
        onHelpClick={this.handleHelpClick}
      />
    )
  }
});

module.exports = SetupContainer;
