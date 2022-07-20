
import tmdb from "../apis/tmdb";

let movies = [
    {
      adult: false,
      backdrop_path: "/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg",
      id: 507086,
      title: "Jurassic World Dominion",
      original_language: "en",
      original_title: "Jurassic World Dominion",
      overview:
        "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      media_type: "movie",
      genre_ids: [12, 28, 878],
      popularity: 14064.562,
      release_date: "2022-06-01",
      video: false,
      vote_average: 6.999,
      vote_count: 1702,
    },
    {
      adult: false,
      backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
      id: 616037,
      title: "Thor: Love and Thunder",
      original_language: "en",
      original_title: "Thor: Love and Thunder",
      overview:
        "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 14],
      popularity: 3503.056,
      release_date: "2022-07-08",
      video: false,
      vote_average: 6.767,
      vote_count: 1075,
    }
];
export const getMovies = () => {
  return movies;
};

export const getMovie = (id) => {
  return tmdb.get(`/movie/${id}?language=en-US`);
};
