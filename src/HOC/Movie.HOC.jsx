import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MovieLayout from "../layouts/Movie.layout";




const MovieHOC=({component:Component,...rest})=>{
//components,path,exact

//const Component=component

const WrapMovielayout=(props)=>{
    return(
        <>
         <MovieLayout>
        <Component {...props}/>
        </MovieLayout>
        </>
    )
   
}


    return (
    
    <>
    
    <Routes>
        
        <Route {...rest} element={ <WrapMovielayout/>} />

     </Routes>

    </>
    
    )
}

export default MovieHOC;