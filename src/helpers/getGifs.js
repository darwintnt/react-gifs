export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const images = data.map(gif => {

    return {
      id: gif.id,
      url: gif.images.downsized_medium.url,
      title: gif.title
    };

  });

  return images;

};