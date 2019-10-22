/*dependencies */
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/*components*/
import './App.css';
import LoginForm from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/Navbar';
import ReceiptList from './components/ReceiptList';
import SignupForm from './components/SignUp';

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <PrivateRoute path='/receipts' component={ReceiptList} />
          <Route path='/signup' component={SignupForm} />
          <Route component={LoginForm} />
        </Switch>
    </div>
  );
}

export default App;
