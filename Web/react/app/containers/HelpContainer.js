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
    }
  },

  componentDidMount: function() {
    this.getInfo(this.props);
  },

  componentWillReceiveProps: function(nextProps) {
    this.getInfo(nextProps);
  },

  getInfo: function(props) {
    var helpers = props.user.helpers;
    var hasSetup = helpers;
    if (!hasSetup) {
      this.context.router.push({
        pathname: '/setup',
        state: {
          helpers: {}
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
