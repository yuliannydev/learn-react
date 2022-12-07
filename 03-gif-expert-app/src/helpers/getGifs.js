export const getGifs = async (category) => {
  const key = "Nt4M08gLVq1415KsotKZp28hDX5dQULI";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=8`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gif = data.map((content) => ({
    id: content.id,
    title: content.title,
    image_url: content.images.fixed_height.webp,
  }));

  return gif;
};
