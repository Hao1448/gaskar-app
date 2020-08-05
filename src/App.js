import React, { Fragment } from 'react'
import { Route, Router } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { Projects } from './pages/Projects'
import { Tasks } from './pages/Tasks'
import { Calendar } from './pages/Calendar'
import { Opportunities } from './pages/Opportunities'
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
          dispatch(alertActions.clear());
      });
  }

  render() {
    const { alert } = this.props;
        return (
            <Fragment>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Route exact path="/" component={LoginPage} />
                    <PrivateRoute component={Projects} path="/projects" />
                    <PrivateRoute component={Tasks} path="/tasks" />
                    <PrivateRoute component={Calendar} path="/calendar" />
                    <PrivateRoute component={Opportunities} path="/opportunities" />  
                </Router>
            </Fragment>
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
