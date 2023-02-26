import React from 'react';


const Movie = ({movie}) => {
  const [watch, setWatch] = React.useState(false)
  const handleWatch = (event) => {
    setWatch(!watch);
  }

  return (
    <div>
      <li>
        {movie.title}
        <button onClick={handleWatch}>{watch ? 'Watched' : 'Not Watched'}</button>
      </li>

    </div>
  );
}

export default Movie