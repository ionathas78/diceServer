require("./rollFunctions.js");
const express = require("express");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  **  Page calls

app.get("/", function(req, res) {
    let fileName = "./html/index.html";

    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log(`Couldn't find '${fileName}'!`);
            res.end();
        };
        res.end(data);
    });
});

//  **  Reference Calls

app.get("/index.js", function(req, res) {
    let fileName = "./html/index.js";

    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log(`Couldn't find '${fileName}'!`);
            res.end();
        };
        res.end(data);
    });
});

app.get("/style.css", function(req, res) {
    let fileName = "./html/style.css";

    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log(`Couldn't find '${fileName}'!`);
            res.end();
        };
        res.end(data);
    });
});

app.get("/favicon.ico", function(req, res) {
    return null;
})

//  **  API calls

app.get("/api/dice/fate:modifier", function(req, res) {
    let modifier = 0;
    let result = 0;
    if (req.params.modifier) {
        modifier = req.params.modifier.replace("+", "");
    };
    if (isNaN(modifier)) {
        modifier = 0;
    };
    result = rollFate(modifier);
    res.end(result.toString());
});

app.get("/api/dice/:dieType", function(req, res) {
    // console.log(req.params.dieType);
    let dieType = "d";
    if (req.params.dieType) {
        dieType = req.params.dieType.toLowerCase();
    };
    parseDiceCall(dieType, res);
});


app.get("*", function(req, res) {
    let fileName = "./html/index.html";

    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log(`Couldn't find '${fileName}'!`);
            res.end();
        };
        res.end(data);
    });
});


//  **  Functions

function parseDiceCall(diceCall, res) {
    let dPos = diceCall.indexOf("d");
    let bPos = diceCall.indexOf("+");
    if (bPos == -1) {
        bPos = diceCall.indexOf("-");
    };

    let diceNumber = 1;
    let dieType = 2;
    let modifier = 0;

    let result = -1;

    if (dPos > 0) {
        diceNumber = diceCall.substring(0, dPos);
    };
    if (dPos < diceCall.length) {
        if (bPos == -1) {
            dieType = diceCall.substring(dPos + 1);
        } else {
            dieType = diceCall.substring(dPos + 1, bPos);
            modifier = diceCall.substring(bPos);
            modifier = modifier.replace("+","");
        };
    };

    if (dieType == "f") {
        result = rollxDF(diceNumber, modifier);
    } else {
        result = rollxDy(diceNumber, dieType, modifier);
    };
    // console.log(result);
    res.end(result.toString());
};


//  **  Listener
app.listen(PORT, function () {
    console.log("app listening on PORT " + PORT);
});
