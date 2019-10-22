import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home.js';
import ReceiptList from './components/ReceiptList.js';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navigation />
       <Route exact path="/" component={Home} />
       <Route path="/receiptlist" component={ReceiptList} />
    </div>
  );
}

export default App;
