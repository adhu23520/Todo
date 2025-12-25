import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

app.get("/", (req, res) => {   
    res.send("Hello, World!");
});

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on 3000");
    });