import React, { useRef } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef("");

  const searchCocktailHandler = () => {
    setSearchTerm(searchValue.current.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktailHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
