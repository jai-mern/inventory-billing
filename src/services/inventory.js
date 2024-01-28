// inventory.js
// This service file can handle inventory-related requests to your backend server

import { fetchData, postData } from './api';

// Example function to fetch inventory items
export const fetchInventoryItems = async () => {
  try {
    const data = await fetchData('inventory');
    return data;
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    throw error;
  }
};

// Example function to add a new inventory item
export const addInventoryItem = async (itemData) => {
  try {
    const response = await postData('inventory', itemData);
    return response;
  } catch (error) {
    console.error('Error adding inventory item:', error);
    throw error;
  }
};
