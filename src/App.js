import React from 'react';
import SimpleSelect from './components/select'
import ContainedButtons from './components/input';
import NavBar from './components/navbar';
import './App.css';
import Grid from './components/Grid';
import DisplayItem from './components/DisplayItem';
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <picturelist/>} />
          <Route path="/Home" component={() => <picturelist/>} />
          Travel through time and space from the comfort of your couch !
        </Switch>
        <h2 className="title">Travel through time and space from the comfort of your couch !</h2>
        <div className="flexbox">
        <SimpleSelect />
        <ContainedButtons />
        </div>
    </div>
  );
}

export default App;
