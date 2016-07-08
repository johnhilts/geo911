import React from 'react';
import ReactRouter from 'react-router';
import Help from '../components/Help';

const HelpContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      hasSetup: false,
      helpers: [],
    }
  },

  componentDidMount() {
    this.getInfo(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this.getInfo(nextProps);
  },

  getInfo(props) {
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

  handleRedClick(e) {
    alert('Red Alert!');
  },

  handleYellowClick(e) {
    alert('Yellow Alert!');
  },

  render() {
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
        onHelperClick={this.props.onHelperClick}
        onHelperShowOnly={this.props.onHelperShowOnly}
      />
    )
  }
});

export default HelpContainer;
