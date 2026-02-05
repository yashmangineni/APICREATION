require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// DB Connection
connectDB();

// ✅ Updated route name
app.use("/api/contact", require("./routes/userRoutes"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
