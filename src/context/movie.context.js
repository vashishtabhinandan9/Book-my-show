import React, { useState } from "react";


export const MovieContext = React.createContext();
{
  /**
movieprovider is a compoi=nent 
it provides us two things
movie it is the default dta mentioned belo
setmovie it is function to set the information  
*/}
const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;