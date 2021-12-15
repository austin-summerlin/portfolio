/* eslint-disable max-len */
const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(json());

const { parsed: config } = dotEnv.config();

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`;

const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
};

app.get('/photos', async (req, res) => {
  const response = await axios.get(BASE_URL, { auth, params: { next_cursor: req.query.next_cursor } });
  return res.send(response.data);
});

const PORT = 7001;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));

