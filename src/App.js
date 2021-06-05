import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import About from './pages/AboutUs.js';
import Game from './pages/Game.js';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/game" component={Game} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default App;
