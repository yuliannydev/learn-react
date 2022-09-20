export const getImagen = async () => {
  try {
    const apiKey = "hwxknBi0ymiqbwWGwyhfJm4eWlNce6H7";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
    console.log(data);
  } catch (error) {
    // manejo del error
    // console.log(error);
    return "No se encontró la imagen";
  }
};

// getImagen();
