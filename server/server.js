require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postroutes");
const app = express();


connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/auth", require("./routes/auth"));


app.get("/", (req, res) => {
    res.send("Server Running...");
});
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);

});