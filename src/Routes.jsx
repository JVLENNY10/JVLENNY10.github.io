import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Bio from './pages/Bio';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } exact path='/' />
        <Route component={ Bio } exact path='/bio' />
      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
