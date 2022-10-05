/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Faizal Aslam    Student ID: 152121216  Date: 2022-10-04
*
*  Online (Cyclic) Link:  https://dead-rose-bighorn-sheep-cap.cyclic.app/
********************************************************************************/ 



const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const fs = require("fs");
fs.readFile("./data/products.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log("File data:", jsonString);
});
fs.readFile("./data/categories.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log("File data:", jsonString);
});
app.use(express.static(path.join(__dirname, 'view')))
app.get('/', (req, res) => {

    res.sendFile("/index.html");
})
app.get("/Demos", (req, res) => {
    res.sendFile(__dirname + "/Demos.html");
})
app.get("/Categroies", (req, res) => {
    res.sendFile(__dirname + "/Categroies.html");
})
app.get("/Products", (req, res) => {
    res.sendFile(__dirname + "/products.html");
})
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(port, () => {
    console.log("Express http server listening on 8080");
})