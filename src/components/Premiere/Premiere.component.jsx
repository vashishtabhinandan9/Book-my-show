import React from "react";
import Slider from "react-slick";

import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
//component
import Poster from "../Poster/poster.component";

import settings from "../../config/PosterCarousel.config";

import PremierImages from "../../config/PremiereImages.config";

export const Premier = () => {

  return (<>
  <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiere</h3>
    <p className="text-white text-sm ">Brand new release every friday</p>
  </div>
    <Slider {...settings}>
    {PremierImages.map((image)=> (
      <Poster {...image} isDark/>
    ))}
    </Slider>
    </>);
};

export default Premier;
