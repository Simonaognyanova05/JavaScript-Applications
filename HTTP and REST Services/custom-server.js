const express = require('express');

const app = express();

//Examples
app.get('/test', (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
    res.send('<h1>Hello from Custom Server</h1>');
});

app.get('/cats', (req, res) => {
    res.json([
    {
        'name': "Maxi",
        'age': "0",
    },
    {
        'name': "Lussi",
        'age': "0",
    },
    {
        'name': "Darssi",
        'age': 0,
    }
]);
});

app.listen(3000);