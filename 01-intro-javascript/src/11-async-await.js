const getImage = async () => {
  try {
    const apiKey = "k5bdD8zfpf6Bpvx0AhKWIgtj8gSeqHXb";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await response.json();
    const { webp } = data.images.original;

    const img = document.createElement("img");
    img.src = webp;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};
getImage();
