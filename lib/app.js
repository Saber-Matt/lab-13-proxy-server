/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocation, formatWeather, formatReviews } from './mungeUtils.js';

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

app.get('/weather', async (req, res) => {

  try {
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_DB_API_KEY}`);

    const weather = formatWeather(response.body.data);

    res.json(weather);
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const response = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`)
      .set('Authorization', `Bearer ${process.env.YELP_API}`);
    console.log(response.body);

    const data = formatReviews(response.body);

    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;



