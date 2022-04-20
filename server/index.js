const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {getCompliment, getFortune} = require("./controller")
const {newKeanu, deleteKeanu, updateKeanu} = require("./keanuController")

app.get("/api/compliment", getCompliment);
app.get('/api/fortunes', getFortune)
app.post('/api/keanuCompliment', newKeanu)
app.delete('/api/keanuCompliment/:id', deleteKeanu)
app.put('/api/keanuCompliment/:id', updateKeanu)

app.listen(4000, () => console.log("Server running on 4000"));
