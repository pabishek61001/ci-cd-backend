import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json("Backend connected");
})

app.listen(4000)