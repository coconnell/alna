import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import otherpage from './otherpage';
import Fib from './fib';


function App() {
  return (
    <Router>
      <div className="App">
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={otherpage} />
        </div>
      </div>
   </Router>
  );
}

export default App;
