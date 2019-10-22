/*dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


/*components */
import './index.css';
import App from './App';

ReactDOM.render(
<Provider store={store}>
    <Router>
<App />
</Router>
</Provider>,
 document.getElementById('root'));

