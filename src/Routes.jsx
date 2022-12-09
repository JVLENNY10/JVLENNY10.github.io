import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Bio from './pages/Bio';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } exact path='/' />
        <Route component={ Bio } exact path='/bio' />
        <Route component={ Skills } exact path='/skills' />
        <Route component={ Projects } exact path='/projects' />
        <Route component={ ErrorPage } exact path='*' />
      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
