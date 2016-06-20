var React = require('react');
var Main = require("../containers/MainContainer");
var HelpContainer = require("../containers/HelpContainer")
var LoginContainer = require("../containers/LoginContainer")

var styles = {
  container: {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    props.user && props.user.key !== 0
    ?
      <div style={styles.container}>
        <p>Home area</p>
        <HelpContainer user={props.user} />
      </div>
    :
      <div><LoginContainer user={props.user} onAuthorize={props.onAuthorize} /></div>
  )
}

module.exports = Home;
