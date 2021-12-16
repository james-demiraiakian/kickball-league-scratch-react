import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Kickball League</h1>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/team-list">Teams</NavLink>
        <NavLink to="/player-list">Players</NavLink>
        <Switch>
          <Route exact path="/" />
          <Route path="/team-list" />
          <Route path="/team-list/:id" />
          <Route path="/player-list" />
          <Route path="/player-list/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
