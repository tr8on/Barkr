const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {dogRouter} = require('./routes/dog');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

app.use('/dogs', dogRouter )

const PORT = process.env.PORT || 4567

app.get('/', (req, res) => res.send('Dog work!'));


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
