var React = require('react');

var Login = function(props) {
  return (
    <form onSubmit={props.onSubmit}>
        <input value={props.email} onChange={props.onUpdateEmail} placeholder="email" /><br />
        <br />
        <input type="password" value={props.password} onChange={props.onUpdatePassword} placeholder="password" />
        <br />
        <br />
        <input type="submit" value="Login" />
    </form>
  )
}

module.exports = Login;
