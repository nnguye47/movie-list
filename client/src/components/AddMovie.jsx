import React from 'react';

const AddMovie = ({test, handleAddMovie}) => {
  return (
    <div>
      <form id="addMovie" onSubmit={handleAddMovie}>
        <input type='text' placeholder='Add a Movie Title' onChange={test}></input>
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovie;