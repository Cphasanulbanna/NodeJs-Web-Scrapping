const express = require("express");
const jsdom = require("jsdom");
const axios = require("axios");

const { JSDOM } = jsdom;
const app = express();

const PORT = 3005;

const URL = "https://www.amazon.in/s?k=iphone+14+pro+max&ref=nb_sb_ss_ts-doa-p_3_6";
async function fetchData() {
    const resposne = await axios(URL);
    console.log(resposne);
}

fetchData();

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
