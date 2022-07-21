import React, { useState, useEffect } from 'react';
// Import Link dan Outlet di sini
import { Link, Outlet, useSearchParams } from 'react-router-dom';

import { getMovies } from '../functions/movies';

function ListMovie() {
  const [movies, setMovies] = useState([]);

  let [queryStrings, setQueryStrings] = useSearchParams();

  useEffect(() => {
    let fetchedMovies = getMovies();

    if (queryStrings.get('filter') === 'asc') {
      fetchedMovies = fetchedMovies.sort((a, b) => a.title - b.title);
    } else if (queryStrings.get('filter') === 'desc') {
      fetchedMovies = fetchedMovies.sort((a, b) => b.title - a.title);
    }

    setMovies(fetchedMovies);
  }, []);

  return (
    <>
      <main>
        <div>Filter secara: {queryStrings.get('filter')}</div>
      </main>
      <div>Listing : </div>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/detailmovie/${movie.id}`}>{movie.id}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Jangan lupa gunakan outlet di sini (anggap seperti slot yang bisa dimasukkan apa saja) */}
        <Outlet />
      </div>
    </>
  );
}

export default ListMovie;
