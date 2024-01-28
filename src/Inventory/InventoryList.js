// InventoryList.js
import React from 'react';
import InventoryItem from './InventoryItem';
import AddInventoryForm from './AddInventoryForm';

function InventoryList({ inventoryItems, onDelete, onUpdate }) {
  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventoryItems.map(item => (
          <InventoryItem 
            key={item.id} 
            item={item} 
            onDelete={onDelete} 
            onUpdate={onUpdate} 
          />
        ))}
      </ul>
      <AddInventoryForm />
      {/* Optionally, you can include EditInventoryForm here */}
    </div>
  );
}

export default InventoryList;
