// server.js
import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Mount profile routes at /api/profile
app.use("/api/profile", profileRoutes);

// Test route
app.get("/", (req, res) => res.send("Profile API is running"));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
