var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require("../containers/MainContainer");
var Home = require("../components/Home");
var HelpContainer = require("../containers/HelpContainer");
var SetupContainer = require("../containers/SetupContainer");
var RegisterContainer = require("../containers/RegisterContainer");
var LoginContainer = require("../containers/LoginContainer");

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
			<Route path='help' header='Help!' component={HelpContainer} />
			<Route path='setup' header='Setup' component={SetupContainer} />
  		<Route path='register' header='Register' component={RegisterContainer} />
  		<Route path='login' header='Login' component={LoginContainer} />
    </Route>
  </Router>
);

module.exports = routes;
