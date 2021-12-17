import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import TeamList from './view/TeamList/TeamList';
import PlayerList from './view/PlayerList/PlayerList';

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
          <Route path="/team-list/:id" />
          <Route path="/team-list" component={TeamList} />
          <Route path="/player-list/:id" />
          <Route path="/player-list" component={PlayerList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
