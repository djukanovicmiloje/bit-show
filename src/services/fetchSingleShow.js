import Show from "../entities/show";

async function fetchSingleShow(showId) {
  const url = `http://api.tvmaze.com/shows/${showId}`;

  const response = await fetch(url);
  const showData = await response.json();

  const { id, name, genres, image, summary, externals } = showData;

  return new Show(id, name, genres[0], image.original, summary, externals.imdb);
}
export default fetchSingleShow;
