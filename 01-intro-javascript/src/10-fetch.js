const apiKey = "k5bdD8zfpf6Bpvx0AhKWIgtj8gSeqHXb";

const fetchUrl = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

fetchUrl
  .then((response) => response.json())
  .then(({ data }) => {
    const { webp } = data.images.original;

    const img = document.createElement("img");
    img.src = webp;

    document.body.append(img);
  });
