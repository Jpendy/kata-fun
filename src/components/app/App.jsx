import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Appointments from './appointments/Appointments';
import Confirmation from './confirmation/Confirmation';
import LangingPage from './landingPage/LangingPage';
import Services from './services/Services';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LangingPage} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/appointments/:id" component={Appointments} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
}
