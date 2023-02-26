import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'


const App = (props) => {


  const [list, setList] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [movieTitle, setMovieTitle] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    var matches = [];

    for (var item of list) {
      if (item.title.includes(search)) {
        matches.push(item);
      }
    }

    if (matches.length === 0) {
      console.log('no movie by that name found')
    } else {
      setList(matches);
    }
    setSearch('');
}

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleMovieName = (event) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
    console.log(event.target.value);
  }

  const handleAddMovie = (event) => {
    event.preventDefault();
    var movieObject = {
      'title': movieTitle
    };

    var newList = [...list, movieObject];
    setList(newList);
    setMovieTitle('');
  }



  return (
    <div>
      <h1>Movie List</h1>
      <AddMovie test={handleMovieName} handleAddMovie={handleAddMovie}/>
      <div>
        <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
        <button>Watched</button>
        <button>To Watch</button>
      </div>
      <MovieList list={list}/>
    </div>
  );
};

export default App;