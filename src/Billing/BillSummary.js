// BillSummary.js
import React from 'react';

function BillSummary({ items }) {
  return (
    <div>
      <h2>Bill Summary</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>Item: {item.itemName}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: {item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BillSummary;
