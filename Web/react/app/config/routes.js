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

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
			<Route path='help' header='Help!' component={HelpContainer} />
			<Route path='setup' header='Setup' component={SetupContainer} />
    </Route>
  </Router>
);

module.exports = routes;
