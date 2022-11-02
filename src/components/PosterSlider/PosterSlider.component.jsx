import React from 'react'

import Slider from "react-slick"
//component
import Poster from "../Poster/poster.component";

//images array//config
import PremierImages from "../../config/PremiereImages.config";

//configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {

  const sliderconfig= props.config ? props.config : PosterCarouselSettings
  {/**now some where we need 4 poster in slider somewhere we need 5 so for that we need to
   change the slider settinfs
that is what slidedconfig do if props has a configuration then apply that otherwise apply defult one (postercarousal settings)
*/}

  return (
    <>
    <div className="flex flex-col items-start py-4">
      <h3 className={` text-2xl font-bold 
         ${ props.isDark ? "text-white" : "text-gray-800"}`}
        >
          {props.title}
        </h3>

    <p className={` text-sm 
         ${ props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
  </div>
    <Slider {...sliderconfig}>
    {props.images.map((image)=> (
      <Poster {...image } isDark={props.isDark}/> 
    ))}
    </Slider>
    </>
  )


}

export default PosterSlider
