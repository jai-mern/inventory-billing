import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import InventoryPage from './pages/InventoryPage';
import BillingPage from './pages/BillingPage';
import axios from 'axios'; // Import Axios

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/billing" component={BillingPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
