import React from 'react';
import './App.css';
import Header from './components/Header';
import SignUp from './components/accounts/SignUp';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './components/accounts/Login';

function App() {
  return (
    <Router>

    <div className="App">
      <Switch>

        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/'>
          <Header/>
        </Route>


      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
