const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const localURI = "mongodb://localhost/mern-template";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("./client/build"));

mongoose.connect(process.env.MONGODB_URI || localURI, { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("Connected to MongoDB database"));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
