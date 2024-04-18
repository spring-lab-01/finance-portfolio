import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserEdit from './UserEdit';
import UsersList from './UsersList';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/users' exact={true} component={UsersList}/>
            <Route path='/users/:id' component={UserEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;