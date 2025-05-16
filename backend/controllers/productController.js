
import Product from '../models/Product.js';

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    const newProduct = new Product({ name, price, description, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Simple search by keyword in name or description
export const searchProducts = async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp(query, 'i'); // case-insensitive
    const results = await Product.find({
      $or: [
        { name: regex },
        { description: regex }
      ]
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


