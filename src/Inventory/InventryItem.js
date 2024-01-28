// InventoryItem.js
import React from 'react';

function InventoryItem({ item, onDelete, onUpdate }) {
  return (
    <li>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button onClick={() => onUpdate(item)}>Edit</button>
    </li>
  );
}

export default InventoryItem;
