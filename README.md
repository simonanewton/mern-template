# MERN Stack Template

## Description

This respository is a [MERN Stack](https://www.mongodb.com/mern-stack) Application template. It is open to use for anyone who wants to quickly get started building a [full-stack](https://www.geeksforgeeks.org/what-is-full-stack-development/) web application with a [MongoDB](https://www.geeksforgeeks.org/what-is-mongodb-working-and-features/) database. To start, make sure you use this repository as a template instead of simply cloning it, as this will ensure you create a new repository with a fresh commit history for your new project. After that, simply replace your personal information and project details in the appropriate locations and start building your application! This template is still a work in progress and will continue to be updated with new [npm package](https://www.w3schools.com/whatis/whatis_npm.asp) versions and syntax as needed. If you have any ideas, suggestions, or conerns about the template, feel free to submit a [pull request](https://github.com/simonanewton/mern-template/pulls) on GitHub.

## Table of Contents

* [Description](#description)
* [Express Server](#express-server)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

## Express Server

```js
const PORT = process.env.PORT || 3001;
const MONGODB_URI = "mongodb://localhost/mern-template";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("./client/build"));

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        console.log("Connected to MongoDB database");
        if (err) throw err;
    });

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
```

## Installation

To install the npm packages required to run this application, execute the following command:
```sh
npm install
```

## Usage

To run this application, execute the following command:
```sh
npm start
```

## Contributing

<div>
    <img src="./assets/profile-picture-circle.png" alt="Profile Picture" width=250/>
    <h2><b>Simon Newton</b></h2>
    <hr align=left width=350 />
    <p>Hey, I'm Simon and I'm a Junior Full-Stack Web Developer!</p>
    <a href="https://github.com/simonanewton" target="_blank">GitHub Profile</a> | <a href="https://www.linkedin.com/in/simonanewtondev/" target="_blank">LinkedIn Profile</a> | <a href="https://simonanewton.herokuapp.com/" target="_blank">Portfolio Website</a> | <a href="https://web-developer-log.herokuapp.com/" target="_blank">Developer Blog</a>
</div>

## Credits

NPM Packages
* https://www.npmjs.com/package/express
* https://www.npmjs.com/package/mongoose
* https://www.npmjs.com/package/react
* https://www.npmjs.com/package/react-bootstrap

## License

[![license](https://img.shields.io/badge/license-MIT-green)](https://simonanewton.mit-license.org)

MIT License &copy; Simon Newton <https://simonanewton.mit-license.org>
