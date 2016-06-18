var React = require('react');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;

var styles = {
  header: {
    background: 'orange',
  },
  container: {
    width: '100%',
    height: '92%'
  }
}

function MainContainer(props) {
    return (
      <div>
        <div style={styles.header}>
          <div>
            <h1>
              <Link to="/">geo911</Link>
            </h1>
          </div>
        </div>
        <div style={styles.container}>
          {props.children}
        </div>
        <div>
          <p>Footer</p>
        </div>
      </div>
    )
};

module.exports = MainContainer;
