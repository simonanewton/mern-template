const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("client/build"));

app.use(require("./routes"));

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
