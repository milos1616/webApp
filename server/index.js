import express from "express";
import fetch from "node-fetch";
const PORT = process.env.PORT || 3001;
const app = express();
var counter = 0;
app.get("/counter", (req, res) => {
    res.send('{ "counter" : ' +counter+ ' }');
    counter++;
});
app.get("/api", (req, response) => {
    console.log("api");
    var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    fetch(url)
        .then(res => res.text())
        .then(data => {
            console.log(data);
            response.send(data);
        });
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 