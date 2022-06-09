import React, { useCallback, useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=be88a80b";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      const response = await fetch(MOVIE_API_URL);

      const responseData = await response.json();

      setMovies(responseData);
    } catch (err) {
      setErrorMessage(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search />
      <main></main>
    </div>
  );
}

export default App;
