import React from 'react';
import SimpleSelect from './components/select'
import ContainedButtons from './components/input';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <picturelist/>} />
          <Route path="/Home" component={() => <picturelist/>} />
          Travel through time and space from the comfort of your couch !
        </Switch>
        <div className="flexbox">
        <SimpleSelect />
        <ContainedButtons />
        </div>
    </div>
  );
}

export default App;
