var React = require('react');
var ReactRouter = require('react-router');
var Help = require('../components/Help');

var HelpContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState: function() {
    return {
      hasSetup: false,
      helpers: [],
      helpers: this.props.location && this.props.location.state.helpers ? this.props.location.state.helpers : []
    }
  },

  componentDidMount: function() {
    this.getInfo();
  },

  getInfo: function() {
    var helpers = this.state.helpers;
    var hasSetup = helpers && (helpers.length > 0);
    if (!hasSetup) {
      this.context.router.push({
        pathname: '/setup',
        state: {
          helpers: []
        }
      })
    }
    return (
        this.setState({
          hasSetup: hasSetup,
          helpers: helpers,
        })
    )
  },

  handleRedClick: function(e) {
    alert('Red Alert!');
  },

  handleYellowClick: function(e) {
    alert('Yellow Alert!');
  },

  render: function() {
    if (!this.state.hasSetup) {
      return (
        <p>You need to go to setup!</p>
      )
    }
    return (
      <Help
        helpers={this.state.helpers}
        onRedClick={this.handleRedClick}
        onYellowClick={this.handleYellowClick}
      />
    )
  }
});

module.exports = HelpContainer;
