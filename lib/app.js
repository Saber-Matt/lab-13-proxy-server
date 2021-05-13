/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan, { format } from 'morgan';
import request from 'superagent';
import formatLocation from './mungeUtils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('PROXY API');
});

// API routes,
app.get('/location', async (req, res) => {
  try {
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API}&q=${req.query.search}&format=json`);

    const location = formatLocation(response.body);

    res.json(location);
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });

  }

});

export default app;