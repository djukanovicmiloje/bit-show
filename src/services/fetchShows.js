import Show from "../entities/show";

async function fetchShows() {
  const response = await fetch("http://api.tvmaze.com/shows");
  const showsData = await response.json();

  const shows = showsData.map(
    show =>
      new Show(
        show.id,
        show.name,
        show.genres[0],
        show.image.original,
        show.summary,
        show.externals.imdb
      )
  );
  return shows;
}

export default fetchShows;
