import React from 'react';

const Search = ({handleSubmit, handleChange}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='search...' onChange={handleChange}></input>
        <button type="submit">search</button>
      </form>
    </div>
  )
}

export default Search;