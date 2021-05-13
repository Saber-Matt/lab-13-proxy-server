import { format } from 'morgan';

export function formatLocation(data) {

  const item = data[0];

  return {
    formatted_query: item.display_name,
    latitude: item.lat,
    longitude: item.lon
  };

}

export default formatLocation;