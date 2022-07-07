import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

// context
import { MovieContext } from "../context/movie.context";

const MovieLayout = (props) => {
  const { id } = useParams();{/**use params  gets the id of the moview poster we have clicked  */}
  const { movie, setMovie } = useContext(MovieContext);//use context is a react hook which 
  //helps us to acces moviecontext

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);//GET/movie/{movie_id}=> this gerts movie details
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id])

  return (
    <>
     <MovieNavbar/>
     {props.children}
    </>
  )
}

export default MovieLayout

