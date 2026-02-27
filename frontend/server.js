const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/process', {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        res.send(`<h2>Response from Backend:</h2><p>${response.data.result}</p>`);
    } catch (error) {
        res.send("Error connecting to backend");
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running on port ${PORT}`);
});