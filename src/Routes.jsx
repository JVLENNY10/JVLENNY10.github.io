import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } exact path='/' />
      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
