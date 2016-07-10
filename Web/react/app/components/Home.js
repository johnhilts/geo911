import React from 'react';
import Main from '../containers/MainContainer';
import HelpContainer from '../containers/HelpContainer';
import LoginContainer from '../containers/LoginContainer';

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

const Helper = (props) => {
    return (
      <div style={styles.container}>
        <HelpContainer user={props.user} onHelperClick={props.onHelperClick} onHelperShowOnly={props.onHelperShowOnly} />
      </div>
    )
}

const Home = (props) => {
  return (
    props.user && props.user.owner !== 0
    ? <Helper {...props} />
    : <LoginContainer user={props.user} onAuthorize={props.onAuthorize} />
  )
}

export default Home;
