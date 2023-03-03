import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'


const App = (props) => {
  const [renderList, setRenderList] = React.useState([])
  const [list, setList] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [movieTitle, setMovieTitle] = React.useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('serch value; ', search)
    var copy = Array.from(list);
    var matches = copy.filter(movie => movie.title.includes(search));

    if (matches.length === 0) {
      console.log('no movie by that name found')
      setRenderList(list);
    } else {
      setRenderList(matches);
    }


    setSearch('');
    event.target.reset();

  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log('search field input: ', event.target.value)
  };

  const handleMovieName = (event) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleAddMovie = (event) => {
    event.preventDefault();
    if (movieTitle !== '') {
      var movieObject = {
      'title': movieTitle,
      'status': false,
      };

      var newList = [...list, movieObject]; //[1, 2, 3, movieObject]
      setRenderList(newList)
      setList(newList);
      setMovieTitle('');
      event.target.reset();
    }


  };

  const renderWatched = (event) => {
    event.preventDefault();
    var copy = Array.from(list);
    var notWatched = copy.filter(movie => movie.status === true);
    setRenderList(notWatched)

  };

  const renderToWatch = (event) => {
    event.preventDefault();
    //create a copy of the full list
    var copy = Array.from(list);
    //create a new array by filtering for each movie that has a status of false;
    var notWatched = copy.filter(movie => movie.status === false);
    setRenderList(notWatched)
    //set
    // setRenderList(moviesToWatch);
  };

  const handleStatus = (event, newStatus, movieTitle) => {
    var currentClass = event.target.parentNode.className
    var pulledTitle = event.target.previousSibling.innerText
    //get the status of the element that was pressed
    //create an array copy of the current state of list
    var copy = Array.from(list);
    console.log(copy);
    for (var movie of copy) {
      if (pulledTitle === movie.title) {
        movie.status = !movie.status
      }
    }

    setList(copy);
    //iterate over the array
      //if the name matches
        //change status to newStatus
  }


  return (
    <div>
      <h1>Movie List</h1>
      <AddMovie test={handleMovieName} handleAddMovie={handleAddMovie}/>
      <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
      <button onClick={renderWatched}>Watched</button>
      <button onClick={renderToWatch}>To Watch</button>
      <MovieList list={renderList} handleStatus={handleStatus}/>
    </div>
  );
};

export default App;