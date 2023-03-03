import { Route, Switch } from 'react-router-dom';
import AllMeetupspage from './pages/AllMeetups'
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/mainNavigation';
function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <AllMeetupspage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupsPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>

  </div>;
}

export default App;