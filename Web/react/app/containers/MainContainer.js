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
    var user = {key: 0};

		var localStorageRef = localStorage.getItem('user');

		if (localStorageRef) {
      user = JSON.parse(localStorageRef);
		}

    return {
      user: user,
    }
  },

  handleAuthorization: function(user) {
		localStorage.setItem('user', JSON.stringify(user));
    return this.setState({user: user});
  },

  handleDeauthorization: function() {
    var user = {key: 0};
		localStorage.setItem('user', JSON.stringify(user));
    return this.setState({user: user});
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
            <UserPrompt user={this.state.user} onDeauthorize={this.handleDeauthorization} />
          </div>
        </div>
        <div style={styles.container}>
          {React.cloneElement(this.props.children, { onAuthorize: this.handleAuthorization, user: this.state.user })}
        </div>
        <div>
          <p>Footer</p>
        </div>
      </div>
    )
  }
});

module.exports = MainContainer;
