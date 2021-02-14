import './App.scss';
import PageShell from './components/layout/page-shell'
import PlaylistPage from 'pages/playlist-page'
import SignInPage from 'pages/sign-in-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/collect" component={PlaylistPage} />
        <Route exact path="/filter" component={PageShell} />
        <Route exact path="/explore" component={PageShell} />
        <Route exact path="/visualize" component={PageShell} />
        <Route exact path="/act" component={PageShell} />
      </Switch>
    </Router>
  );
}

export default App;
