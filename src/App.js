import React from 'react';
import SimpleSelect from './components/select';
import NavBar from './components/navbar';
import './App.css';
import Grid from './components/Grid';
import DisplayItem from './components/DisplayItem';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/Home" component={() => <Home />} />
          Travel through time and space from the comfort of your couch !
        <Route path="/period/:periodId" component={Grid} />
        <Route path= "/object/:itemId" component={DisplayItem} />
      </Switch>
      </Router>
    </div>

  );

}
function Home() {
  return (
    <div className="flexbox">
      <SimpleSelect />
    </div>
  )
}

export default App;
