import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import React from "react";
import Main from './OnePager/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
               
        </div>
      </Router>
    </div>
  );
}

export default App;
