export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bTeSuiePzAhNUDCdiJEZwEUo2Jckwg32&q=${ encodeURI( category) }&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs =data.map( img => {
    return {
        id : img.id,
        title : img.title,
        url : img.images?.downsized_medium.url
    }
    })

    //setImages(gifs);
    return gifs;
  }
