const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const result = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  addImage(result.data);
});

function addImage(tvShows) {
  for (let tvShow of tvShows) {
    if (tvShow.show.image) {
      const img = document.createElement("img");
      img.src = tvShow.show.image.medium;
      document.body.append(img);
    }
  }
}
