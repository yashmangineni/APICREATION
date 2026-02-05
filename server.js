require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ FIX 1: Proper CORS (allow preflight OPTIONS)
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Extra safety for preflight
app.options("*", cors());

app.use(express.json());

// DB Connection
connectDB();

// ✅ FIX 2: Correct route file name
app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
