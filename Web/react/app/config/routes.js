import React from 'react';
import ReactRouter, {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainContainer from '../containers/MainContainer';
import Home from '../components/Home';
import HelpContainer from '../containers/HelpContainer';
import SetupContainer from '../containers/SetupContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';

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

export default routes;
