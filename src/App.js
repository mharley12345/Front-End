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

import AddReceipt from './components/AddReceipt'


function App() {
  return (
    <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={LoginForm} />

          <PrivateRoute path ='/home' component={Home} />
          <PrivateRoute path='/receipts' component={ReceiptList} />
          <PrivateRoute path='/add-receipt' component={AddReceipt} />          

          <Route path='/signup' component={SignupForm} />
          <Route component={LoginForm} />
        </Switch>
    </div>
  );
}

export default App;
