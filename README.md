🛒 Mini E-Commerce Platform
A simple full-stack e-commerce-style platform where users can:

Submit products

View submitted products

Search products by keyword

🔧 Tech Stack
Frontend: React.js + Tailwind CSS

Backend: Node.js + Express.js

Database: MongoDB (via Mongoose)

Version Control: GitHub

Optional AI Feature: Keyword-based search (simulating contextual search)

🚀 Features Implemented
✅ Product Submission form
✅ Product list view in card layout
✅ MongoDB integration
✅ Simple keyword search (name & description)
✅ Axios-based API integration
✅ Tailwind CSS UI
✅ Organized folder structure (client + server)

🛠️ Setup Instructions
Prerequisites: Node.js, npm, MongoDB installed locally or cloud (e.g. MongoDB Atlas)

1. Clone the Repository
git clone https://github.com/srjaiswalgithub/mini-ecommerce-platform.git
cd mini-ecommerce-platform

2. Backend Setup
cd server
npm install
3.Create .env file in backend/:
MONGO_URI=your-mongodb-connection-string
PORT=5000

4.Start Backend
npm run dev
Your backend will run at: http://localhost:5000

5. Frontend Setup
cd ../client
npm install

6.Start Frontend
npm run dev
Frontend will run at: http://localhost:5173


📁 Folder Structure Overview
mini-ecommerce-platform/
├── client/         # React frontend
│   ├── src/
│   └── ...
├── server/         # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   └── ...
└── README.md
🔗 Hosting 
Live Link - https://mini-ecommerce-platform-1.onrender.com/

