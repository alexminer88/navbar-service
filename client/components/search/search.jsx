import React from 'react';

const Search = (props) => {
  return (
    <div className="v_search-section">
      <div className="v_search-section__wrapper">
        <select className="v_search-section__select" type="select" name="category">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="clothes">Clothes</option>
          <option value="shoes">Shoes</option>
          <option value="games">Games</option>
        </select>
        <input className="v_search-section__query" type="text" nmae="query" />
        <button className="v_search-section__button" type="button">Search</button>
      </div>
    </div>
  );
};

export default Search;