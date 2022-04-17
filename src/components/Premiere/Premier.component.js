import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//images array
import PremierImages from "../../config/PremiereImages.config";

const Premier = () => {

    
const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (<>
  <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiere</h3>
    <p className="text-white text-sm ">Brand new release every friday</p>
  </div>
    <Slider {...settings}>
    {PremierImages.map((image)=> (
      <Poster {...image } /> 
    ))}
    </Slider>
    </>);
};

export default Premier;
