const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send(req.get('host'));
});

app.listen(10000);
