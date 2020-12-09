import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadProject from './UploadProject';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/add-project'>
            <UploadProject />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
