const express = require("express");
const app = express();
app.use(express.static('public'))

const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}

app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({ statuscocde: 200, data: result });
});

app.get("/Display", (req, res) => {
    const n1 = `<html>
                    <body>
                        <H1>HELLO THIS IS THE TASK OF WEEK 2</H1>
                        <p>Hey this is just some random paragraph.</p>
                    </body>
                </html>`;
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));
});

const port = 3000;
app.listen(port, () => {
    console.log("I'm running on port: " + port);
})