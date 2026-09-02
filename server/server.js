require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postroutes");
const adminRoutes = require("./routes/adminroutes");
const app = express();


connectDB();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use("/api/posts", postRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", require("./routes/auth"));


app.get("/", (req, res) => {
    res.send("Server Running...");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});