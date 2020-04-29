import React from 'react';
import './App.css';
import Grid from './components/Grid';
import DisplayItem from './components/DisplayItem';
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/topics">
            <Grid />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/object/:itemId" component={DisplayItem} />
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
