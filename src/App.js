import React from 'react';
import SimpleSelect from './components/select';
import NavBar from './components/navbar';
import './App.css';
import Grid from './components/Grid';
import DisplayItem from './components/DisplayItem';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Illustration from './components/illustration';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/Home" component={() => <Home />} />
          <Route path="/period/:periodId" component={Grid} />
          <Route path="/object/:itemId" component={DisplayItem} />
        </Switch>
      </Router>
      <Illustration />
    </div>

  );

  function Home() {
    return (
      <div>
        <h2 className="title">Travel through time and space from the comfort of your couch !</h2>
        <div className="flexbox">
          <SimpleSelect />
        </div>
      </div>
    )
  }
}

export default App;