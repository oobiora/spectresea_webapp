import './App.css';
import {Landing} from './Pages/Landing'
import {Destination} from './Pages/Destination'
import {Fleet} from './Pages/Fleet'
import {Lifestyle} from './Pages/Lifestyle'
import BoatPage from './Pages/BoatPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/destination'>
          <Destination />
        </Route>
        <Route exact path='/fleet'>
          <Fleet />
        </Route>
        <Route exact path='/lifestyle'>
          <Lifestyle />
        </Route>
        <Route exact path='/fleet/:id'>
          <BoatPage />
        </Route>
      </Switch>
    </Router>
    </AnimatePresence>
  );
}

export default App;
