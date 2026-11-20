import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routers/authRoute.js"

const app = express();

app.use(express.json());
app.use(cors());


dotenv.config({path: "./config.env"});

connectDB();

app.get("/", (req,res) => {
    res.send("hello from server")
});

app.use("/api/v1/auth", authRouter);


const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});