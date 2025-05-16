

import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import path from 'path';
dotenv.config();
const app = express();

const __dirname = path.resolve();

// Middleware
const corsOptions = {
  origin:process.env.URL,
  credentials:true
}
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// MongoDB Connection
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get((req,res)=>{
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
