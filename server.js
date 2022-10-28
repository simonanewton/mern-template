const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = "mongodb://localhost/mern-template";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("./client/build"));

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        console.log("Connected to MongoDB database");
        if (err) throw err;
    });

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
