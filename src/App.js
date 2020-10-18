import React from 'react';
import './App.css';
import Header from './components/Header';
import SignUp from './components/accounts/SignUp';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './components/accounts/Login';
import {useAuth} from "./components/accounts/AuthProvider"
import Dashboard from './components/accounts/Dashboard';
import {PrivateRouter,CheckAuthenticationRouter} from './components/accounts/PrivateRouter';
import ForgotPassword from './components/accounts/ForgotPassword';
import UpdateProfile from './components/accounts/UpdateProfile';

function App() {

  const {currentUser} = useAuth()


  return (
    <Router>

    <div className="App">
      
      
      <Switch>
        <Route exact path='/' component={Header} />

        <Route path='/signup' component={SignUp} />

        {/* <Route path='/dashboard' component={Dashboard} /> */}
        {/* redirect to login page if user not exits */}
        <PrivateRouter path="/dashboard" component={Dashboard}/>
        <PrivateRouter path="/update-profile" component={UpdateProfile}/>



        {/* <Route path='/login'>
          <Login/>
        </Route> */}
        <CheckAuthenticationRouter path="/login" component={Login} />
        <CheckAuthenticationRouter path="/forgot-password" component={ForgotPassword} />


         


      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
