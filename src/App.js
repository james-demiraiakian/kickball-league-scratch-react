import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import TeamList from './view/Team/TeamList';
import TeamDetail from './view/Team/TeamDetail';
import PlayerList from './view/Player/PlayerList';

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
          <Route path="/team-list" component={TeamList} />
          <Route path="/teams/:id" component={TeamDetail} />
          <Route path="/player-list" component={PlayerList} />
          <Route path="/players/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
