import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
