import React, { useEffect, useState } from 'react';
import { getAllProducts, searchProducts } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query) return fetchProducts();

    try {
      const data = await searchProducts(query);
      setProducts(data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">My Products</h2>

      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
