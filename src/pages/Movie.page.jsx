import React from 'react'
import MovieHero from '../components/MovieHero/MovieHero.component'
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

import Cast from '../components/Cast/Cast.component';


import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config
import TempPosters from "../config/PremiereImages.config";

const Movie = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
   <>
   <MovieHero/>


   <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>Doctor Strange in the Multiverse of Madness - a thrilling ride through the Multiverse with Doctor 
            Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch.
          </p>
        </div>
       
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="my-8">
          <hr />
        </div>

        <div className='my-8'>
        <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and crew</h2>
        <div className='flex flex-wrap gap-4'>
          <Cast 
          image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
          castName="Benidict Cumeberbatch"
          role="Dr.Stephen strange"
          />
          <Cast 
          image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
          castName="Benidict Cumeberbatch"
          role="Dr.Stephen strange"
          />
          <Cast 
          image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
          castName="Benidict Cumeberbatch"
          role="Dr.Stephen strange"
          />
          <Cast 
          image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
          castName="Benidict Cumeberbatch"
          role="Dr.Stephen strange"
          />
          <Cast 
          image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
          castName="Benidict Cumeberbatch"
          role="Dr.Stephen strange"
          />
        </div>
        </div>


        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
          config={settings}
            images={TempPosters}
            title="You Might Also like"
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
          config={settings}
            images={TempPosters}
            title="BMS XCLUSIVE"
            isDark={false}
          />
        </div>


    </div>
   </>
  )
}
export default Movie

