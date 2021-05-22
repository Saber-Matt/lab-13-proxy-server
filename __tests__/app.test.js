import weatherData from '../lib/data/weather.js';
import locationData from '../lib/data/location';
//import { reviews } from '../lib/data/reviews.js';
//import { formatWeather, formatLocation, formatReviews } from '../lib/mungeUtils.js';
import formatLocation from '../lib/mungeUtils.js';

//const request = supertest(app);

describe('API Routes', () => {
  it('test location', async () => {
    const expected = {
      formatted_query: 'Boston, Suffolk County, Massachusetts, USA',
      latitude: '42.3602534',
      longitude: '-71.0582912'
    };

    const actual = formatLocation(locationData);

    expect(expected).toEqual(actual);
  });
});

describe('API Routes', () => {
  it('test location', async () => {
    const expected = {
      //forcast: "Few clouds", time "2021-05-21"
      forcast: 'Few clouds',
      time: '2021-05-21'
    };

    const actual = formatWeather(weatherData);

    expect(expected).toEqual(actual);
  });
});

