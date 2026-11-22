const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('J S Computer Embroidery Works Server Running on port 3000');
});