export function formatLocation(data) {
  const array = data.map(item => {
    return {
      formatted_query: item.display_name,
      latitude: item.lat,
      logitude: item.lon
    };
  });

  return array[0];
}

export function formatWeather(data) {
  const array = data.data.map(item => {
    return {
      forecast: item.weather.description,
      time: item.datetime
    };
  });

  return array.slice(0, 2);
}

export function formatYelpData(data) {
  const array = data.businesses.map(business => {
    return {
      name: business.name,
      image_url: business.image_url,
      price: business.price,
      rating: business.rating,
      url: business.url
    };
  });

  return array.slice(0, 2);
}


export default formatLocation;