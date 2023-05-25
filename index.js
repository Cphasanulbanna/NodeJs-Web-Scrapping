const express = require("express");
const jsdom = require("jsdom");
const axios = require("axios");

const { JSDOM } = jsdom;
const app = express();

const PORT = 3005;

//iphones data api[from  amazon]
const URL = "https://www.amazon.in/s?k=iphone+14+pro+max&ref=nb_sb_ss_ts-doa-p_3_6";

async function fetchData() {
    try {
        const resposne = await axios(URL, {
            method: "GET",
            //from headers of amaznon n/w request
            headers: {
                "upgrade-insecure-requests": 1,
                Host: "www.amazon.in",
                "User-Agent":
                    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            },
        });

        const { document } = new JSDOM(resposne.data).window;

        const products = [];

        //fetching html elements using jsdom
        document.querySelectorAll(".sg-row").forEach((element) => {
            products.push({
                image: element.querySelector(".s-image")?.src,
                title: element.querySelector("h2 span")?.textContent,
                price: element.querySelector(".a-price-whole")?.textContent,
            });
        });

        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
