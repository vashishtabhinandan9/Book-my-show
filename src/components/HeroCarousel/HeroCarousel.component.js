import React from "react";

import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal= ()=>{
    
    var settings = {
        arrows:true,
        centerMode:true,
        centerPadding:"160px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images=[
          "https://images.unsplash.com/photo-1649991320891-b9a2940634d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "https://images.unsplash.com/photo-1649965072297-234c3426f6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "https://images.unsplash.com/photo-1649965072248-1672e1e85ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          "https://images.unsplash.com/photo-1638417819586-e1bc796da639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
          "https://images.unsplash.com/photo-1644709298397-1df2795da69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
      ]
    
    return(
        <>

        
        <HeroSlider {...settings}>
           { 
             images.map((iteration,i)=>(
               
                    <div className="w-14 h-80">
                   <img src={iteration} alt="testing" className="w-full h-full" key={i}/>
                   </div>
               ))
           }
        </HeroSlider>
        </>
    )
}

export default HeroCarousal