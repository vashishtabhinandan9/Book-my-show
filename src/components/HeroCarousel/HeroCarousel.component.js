
import React, { useState, useEffect } from "react";

import HeroSlider from "react-slick";


import axios from "axios";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal= ()=>{

  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);


    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    }
    
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
         prevArrow: <PrevArrow />,
      };

      
    
    return(
        <>

        <div className="lg:hidden">{/**for mobile and meduijm screen , for large screen hidden */}
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 ">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block "  >{/**it is default hidden it means it is hidden for small and meduim screen
       * and for large screen it is block
       *  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
       * this is base url for${image.backdrop_path}
       */}
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                 src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div> 
       
        </>
    )
}

export default HeroCarousal