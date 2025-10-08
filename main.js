const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello Baby")
})

app.listen(3000)