/*dependencies */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/*components*/
import './App.css';
import LoginForm from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Navigation from './components/Navigation';
import Home from './components/Home.js';
import ReceiptList from './components/ReceiptList';
import SignupForm from './components/SignUp';

function App() {
  return (
    <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path ='/home' componet={Home} />
          <PrivateRoute path='/receipts' component={ReceiptList} />
          <Route path='/signup' component={SignupForm} />
          <Route component={LoginForm} />
        </Switch>
    </div>
  );
}

export default App;
