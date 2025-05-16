import axios from 'axios';

const API_BASE_URL = 'https://mini-ecommerce-platform-1.onrender.com/api/products'; // Update if your backend runs elsewhere

// Add a new product
export const addProduct = async (productData) => {
  const response = await axios.post(API_BASE_URL, productData);
  return response.data;
};

// Fetch all products
export const getAllProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Search products by query (optional search feature)
export const searchProducts = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
  return response.data;
};
