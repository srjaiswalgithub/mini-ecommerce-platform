import React, { useState } from 'react';
import ProductSubmission from './pages/ProductSubmission';
import MyProducts from './pages/MyProducts';

const App = () => {
  const [activeTab, setActiveTab] = useState('submit');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Mini E-Commerce App</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveTab('submit')}
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'submit' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
        >
          Product Submission
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'view' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
        >
          My Products
        </button>
      </div>

      {activeTab === 'submit' ? <ProductSubmission /> : <MyProducts />}
    </div>
  );
};

export default App;
