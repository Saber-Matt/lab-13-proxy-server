//import { weather } from '../lib/data/weather.js';
import locationData from '../lib/data/location';
//import { reviews } from '../lib/data/reviews.js';
import { formatWeather, formatLocation, formatReviews } from '../lib/mungeUtils.js';

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