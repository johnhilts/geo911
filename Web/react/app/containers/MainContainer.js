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
    return this.handleSaveUser(user);
  },

  handleDeauthorization: function() {
    var user = {key: 0};
    return this.handleSaveUser(user);
  },

  handleSaveUser: function(user) {
		localStorage.setItem('user', JSON.stringify(user));
    return this.setState({user: user});
  },

  handleSaveHelpers: function(helpers) {
    var user = this.state.user;
    user.helpers = helpers;
    return this.handleSaveUser(user);
  },

  handleHelperClick: function(event) {
    event.preventDefault();
    var linkElement = event.target.attributes["data-helper-key"].value;
    document.querySelector('[data-helper-key="' + linkElement + '"]').style.display = "none";
    var divElement = 'div' + linkElement.substring(1);
    document.querySelector('[data-helper-key=\"' + divElement + '\"]').style.display = "block";
  },

  handleHelperShowOnly: function(helperIndex) {
    var linkElement = 'a' + helperIndex;
    document.querySelector('[data-helper-key="' + linkElement + '"]').style.display = "block";
    var divElement = 'div' + linkElement.substring(1);
    document.querySelector('[data-helper-key=\"' + divElement + '\"]').style.display = "none";
  },

  render: function() {
    var year = (new Date()).getFullYear();
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
          {React.cloneElement(this.props.children, { onAuthorize: this.handleAuthorization, user: this.state.user,
            onHelperClick: this.handleHelperClick, onHelperShowOnly: this.handleHelperShowOnly, onSaveHelpers: this.handleSaveHelpers, })}
        </div>
        <div>
          <p>geo911 &copy; {year}</p>
        </div>
      </div>
    )
  }
});

module.exports = MainContainer;
