const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors({
        origin: true
    })
);

app.get('/', (req, res) => {
    res.json("hello world");
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});