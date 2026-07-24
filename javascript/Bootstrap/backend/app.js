import express from "express";
import welcome, { city, country } from "./data.js";

const app = express();

welcome("Mayuri");

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.get("/city", (req, res) => {
    res.send(city);
});

app.get("/country", (req, res) => {
    res.send(country);
});

// app.get("/country", (req, res) => {
//     res.send(country);
// });

app.post("/user",(req, res) => {
    res.send("New user created")
});

app.put("/user", (req, res) => {
    res.send("User updated");
});

app.patch("/user", (req, res) => {
    res.send("User updated partially");
});

app.delete("/user/:id", (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

