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

function Helper(props) {
    return (
      <div style={styles.container}>
        <HelpContainer user={props.user} onHelperClick={props.onHelperClick} onHelperShowOnly={props.onHelperShowOnly} />
      </div>
    )
}

function Home (props) {
  return (
    props.user && props.user.key !== 0
    ? <Helper {...props} />
    : <LoginContainer user={props.user} onAuthorize={props.onAuthorize} />
  )
}

module.exports = Home;
