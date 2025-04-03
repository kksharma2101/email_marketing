import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectToDb from "./config/db.js";
import router from "./routes/email.router.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); 

// Routes
// app.use('/api/users', userRoutes);
app.use("/v1/api", router);

// Start server
const PORT = process.env?.PORT || 2000;

// Database connection
connectToDb();

// Start Express Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
