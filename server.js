require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

(async () => {
  await connectDB();

  // Root route
  app.get('/', (req, res) => res.json({ message: 'Server is running!' }));

  // API route
  app.get('/api/hello', (req, res) => res.json({ message: 'Hello from backend!' }));

  app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
})();
