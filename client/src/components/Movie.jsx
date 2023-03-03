import React from 'react';


const Movie = ({movie, changeStatus}) => {
  //movie status is false by default


  return (
    <div>
      <li className='toWatch'>
        <span>{movie.title}</span>
        <button onClick={changeStatus}>{movie.status ? 'Watched' : 'To Watch'} </button>
      </li>

    </div>
  );
}

export default Movie