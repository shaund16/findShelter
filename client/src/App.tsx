import Footer from './components/user/Footer';
import Header from './components/user/Header';
import Search from './components/user/Search';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/admin/Register';
import Dashboard from './components/dashboard/Dashboard';
import useShelters from './hooks/useShelters';

import { useState } from 'react';
import Shelter from './components/dashboard/Shelter';
import Login from './components/admin/Login';
import Reservation from './components/user/Reservation';

function App() {
  const [appState, setAppState] = useState({
    user: {},
    shelter: {},
  });

  const shelters = useShelters();

  const shelter = shelters.map(shelter =>
    <Shelter
      key={shelter.id}
      name={shelter.name}
      street_address={shelter.street_address}
      city={shelter.city}
      province={shelter.province}
      postal_code={shelter.postal_code}
      country={shelter.country}
      phone={shelter.phone}
      email={shelter.email}
      thumbnail_url={shelter.thumbnail_url}
      website_url={shelter.website_url}
      capacity={shelter.capacity}
      couples={shelter.couples}
      female_only={shelter.female_only}
      male_only={shelter.male_only}
      family={shelter.family}
      pets={shelter.pets}
    />
  )

  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* Main Page */}
          <Route exact path='/'>
            <Header />
            <Search />
            <Footer />
          </Route>
          {/* Register */}
          <Route path='/register'>
            <Register setAppState={setAppState} />
          </Route>
          {/* Dashborad */}
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/user'>
            <Header />
            {shelter}
          </Route>
          <Route path='/reservation'>
            <Header />
            <Reservation />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
