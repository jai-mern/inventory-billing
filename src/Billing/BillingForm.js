// BillingForm.js
import React, { useState } from 'react';

function BillingForm({ onSubmit }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const billItem = {
      itemName,
      quantity,
      price
    };
    onSubmit(billItem);
    // Reset form fields
    setItemName('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <div>
      <h2>Billing Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input 
            type="text" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
          />
        </label>
        <label>
          Quantity:
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))} 
          />
        </label>
        <label>
          Price:
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(parseInt(e.target.value))} 
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default BillingForm;
