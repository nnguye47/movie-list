import Movie from './Movie.jsx'
import React from 'react';

const MovieList = ({list}) => {
  // console.log('list: ', list);

  return (
  <div>
    {list.map(item =>
        <Movie movie={item} key={list.indexOf(item)}/>
        // console.log('testing', movie);
    )}
  </div>
  )
}

export default MovieList