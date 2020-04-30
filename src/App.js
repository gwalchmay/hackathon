import React from 'react';
import SimpleSelect from './components/select';
import NavBar from './components/navbar';
import './App.css';
import Grid from './components/Grid';
import DisplayItem from './components/DisplayItem';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import DeloreanFixe from  './images/deloreanfixe.png';

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
    </div>

  );

  function Home() {
    return (
      <div className='lastGrid'>
        <h2 className="title">Travel through time and space from the comfort of your couch !</h2>
        <SimpleSelect />
        <img className='Delorean' src={DeloreanFixe} alt="Logo" />
      </div>
    )
  }
}

export default App;