const express = require("express");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const app = express();

const PORT = 3005;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
