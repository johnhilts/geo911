var React = require('react');
var ReactRouter = require('react-router');

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
          <h1>Header</h1>
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
