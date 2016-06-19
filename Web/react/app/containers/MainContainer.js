var React = require('react');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;
var UserPrompt = require('../components/UserPrompt');

var styles = {
  header: {
    background: 'orange',
  },
  container: {
    width: '100%',
    height: '92%'
  }
}

var MainContainer = React.createClass({
  getInitialState: function() {
    return {
      uid: 0,
    }
  },

  handleAuthorization: function(uid) {
    console.log('auth-ing user: ' + uid);
    return this.setState({uid: uid});
  },

  render: function() {
    return (
      <div>
        <div style={styles.header}>
          <div>
            <h1>
              <Link to="/">geo911</Link>
            </h1>
          </div>
          <div>
            <UserPrompt />
          </div>
        </div>
        <div style={styles.container}>
          {React.cloneElement(this.props.children, { onAuthorize: this.handleAuthorization, uid: this.state.uid })}
        </div>
        <div>
          <p>Footer</p>
        </div>
      </div>
    )
  }
});

module.exports = MainContainer;
