import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Home from './pages/Home'; // Assuming you have a Home page component
import InventoryPage from './pages/InventoryPage'; // Assuming you have an InventoryPage component
import BillingPage from './pages/BillingPage'; // Assuming you have a BillingPage component
import Login from './components/Login'; // Assuming you have a Login component
import Register from './components/Register'; // Assuming you have a Register component
import BillingForm from './components/BillingForm'; // Assuming you have a BillingForm component
import BillingSummary from './components/BillingSummary'; // Assuming you have a BillingSummary component
import Button from './components/Button'; // Assuming you have a Button component
import Input from './components/Input'; // Assuming you have an Input component
import AddInventory from './components/AddInventory'; // Assuming you have an AddInventory component
import EditInventory from './components/EditInventory'; // Assuming you have an EditInventory component
import InventoryFileList from './components/InventoryFileList'; // Assuming you have an InventoryFileList component
import InventoryItem from './components/InventoryItem'; // Assuming you have an InventoryItem component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/billing" component={BillingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-inventory" component={AddInventory} />
        <Route path="/edit-inventory/:id" component={EditInventory} />
        <Route path="/inventory-file-list" component={InventoryFileList} />
        <Route path="/inventory-item/:id" component={InventoryItem} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
