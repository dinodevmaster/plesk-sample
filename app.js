import express from "express";

const app = express();

app.set('port', 4000);

app.get('/', (req, res) => {
    res.send(`Hello world!!!`);
})

app.listen(app.get('port'), () => {
    console.log(`Listen on port ${app.get('port')}`);
});

