# MERN Stack Template

## Description

This respository is a MERN Stack Application Template. It is open to use for anyone who wants to quickly get started building a full-stack web application. To start, make sure you use this repository as a template instead of simply cloning it, as this will create a new repository with a fresh commit history. After that, simply replace your personal information and project details in the appropriate files and start building your application! This template is still a work in progress and will continue to be updated with new package versions and syntax as needed. If you have any ideas, suggestions, or conerns about the template, feel free to submit a pull request on GitHub.

## Table of Contents

* [Description](#description)
* [Server](#server)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

## Server

```js
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

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, 
    () => console.log("Connected to MongoDB database")).catch(err => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
```

## Installation

To install the required npm packages to run this application, run the following command:
```sh
npm install
```

## Usage

To use this application, run the following command:
```sh
npm start
```

## Contributing

<div>
    <img src="./assets/profile-picture-circle.png" alt="Profile Picture" width=250/>
    <h3><b>Simon Newton</b></h3>
    <hr align=left width=350 />
    <p>Hey I'm Simon and I'm a Junior Full-Stack Web Developer!</p>
    <a href="https://github.com/simonanewton" target="_blank">GitHub Profile</a> | <a href="https://www.linkedin.com/in/simon-newton-2a7440129" target="_blank">LinkedIn Profile</a> | <a href="https://simonanewton.herokuapp.com/" target="_blank">Personal Website</a>
</div>

## Credits

NPM Packages
* https://www.npmjs.com/package/react
* https://www.npmjs.com/package/mongoose
* https://www.npmjs.com/package/express

## License

[![license](https://img.shields.io/badge/license-MIT-green)](https://simonanewton.mit-license.org)

MIT License &copy; Simon Newton <https://simonanewton.mit-license.org>
