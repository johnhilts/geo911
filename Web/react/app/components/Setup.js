var React = require('react');

var Setup = function(props) {
  return (
    <div>
      <p>This is the setup screen</p>
      <p>Add a number to text</p>
      <form onSubmit={props.onSubmit}>
        <input value={props.callNumber} onChange={props.onUpdateNumber} placeholder="enter number" />
        <input type="submit" value="Add" />
      </form>
      <button onClick={props.onHelpClick}>Return</button>
    </div>
  )
}

module.exports = Setup;
