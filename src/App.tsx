import React, { useCallback, useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import LoadingSpinner from "./components/LoadingSpinner";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=be88a80b";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);

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
      <main>{isLoading && !errorMessage && <LoadingSpinner />}</main>
    </div>
  );
}

export default App;
