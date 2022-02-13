const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cors());

app.listen(port, '0.0.0.0');

app.use(express.static('public'));

console.log('Example app listening on port ' + port);