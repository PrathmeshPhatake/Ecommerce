import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoutes from './route/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Use user routes for "/user" endpoint
app.use("/user", userRoutes);

// URI from environment variables
const uri = process.env.MONGODBURL; 

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to MongoDB using Mongoose!"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// Start the express server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
