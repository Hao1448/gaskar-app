import React from 'react'
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import { Home } from './pages/Home'
import HomePage from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { Projects } from './pages/Projects'
import { connect } from 'react-redux';
import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import './index.scss'

class App extends React.Component {
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  render() {
      const { alert } = this.props;
      return (
          <div className="jumbotron">
              <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      {alert.message &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                      }
                      <Router history={history}>
                          <div>
                              <PrivateRoute exact path="/" component={HomePage} />
                              <PrivateRoute component={Projects} path="/projects" />
                              <Route component={LoginPage} path="/login" exact/>
                          </div>
                      </Router>
                  </div>
              </div>
          </div>
      );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp ; 
