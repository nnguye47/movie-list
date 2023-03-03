import Movie from './Movie.jsx'
import React from 'react';

const MovieList = ({list, handleStatus}) => {
  // console.log('list: ', list);
  //{title, status}
  return (
  <div>
    {list.map(item =>
        <Movie movie={item} key={list.indexOf(item)} changeStatus={handleStatus}/>
        // console.log('testing', movie);

    )}
  </div>
  )
}

export default MovieList