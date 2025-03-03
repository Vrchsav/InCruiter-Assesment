const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });