// BillingPage.js
import React, { useState } from 'react';
import BillingForm from '../components/BillingForm'; // Make sure to adjust the path based on your project structure
import BillSummary from '../components/BillSummary'; // Make sure to adjust the path based on your project structure

const BillingPage = () => {
  const [billData, setBillData] = useState(null);

  // Function to handle billing form submission
  const handleBillingSubmit = (formData) => {
    // Perform any necessary processing with the form data
    // For example, you can send the data to the backend for further processing

    // Update state to trigger rendering of BillSummary component
    setBillData(formData);
  };

  return (
    <div>
      <h2>Billing Page</h2>
      <BillingForm onSubmit={handleBillingSubmit} />
      {billData && <BillSummary data={billData} />}
    </div>
  );
};

export default BillingPage;
