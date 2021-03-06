import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Landing from './pages/landing';
import Doggles from './pages/doggles';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Harness from './pages/harness';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

function App() {
  const store = ConfigureStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/doggles' component={Doggles} />
          <Route path='/harness' component={Harness} />
          <Route path='/cart' component={Cart} />
          <Route path='/about'component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Landing} />

          <Redirect to='/' />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;