import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Bio from './pages/Bio';
import Home from './pages/Home';
import Skills from './pages/Skills';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } exact path='/' />
        <Route component={ Bio } exact path='/bio' />
        <Route component={ Skills } exact path='/skills' />
      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
