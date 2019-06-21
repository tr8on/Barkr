const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {dogRouter} = require('./routes/dog')
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './Client/build')));

app.use('/dogs', dogRouter )


const PORT = process.env.PORT || 4567

app.get('/', (req, res) => res.send('Dog work!'));

if (process.env.NODE_ENV == "production") {
    app.use('*', (req, res) => res.sendFile(path.join(__dirname, './Client/build', "index.html")));
    }

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
