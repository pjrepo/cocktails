import React from "react";
import CocktaiList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktaiList />
    </main>
  );
};

export default Home;
