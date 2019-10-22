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

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <PrivateRoute path='/receipts' component={ReceiptList} />
          <Route component={LoginForm} />
        </Switch>
    </div>
  );
}

export default App;
