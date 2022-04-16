import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout=(props)=>{
    return(
        <>
          <h1 className="text-xl"> Default layout</h1>
            <Navbar/>
            <HeroCarousal/>
           {props.children}
        </>
    )
}

export default DefaultLayout;