import React from 'react'

const DetailsCenterInfo = ({detailsData}) => {
    const API_IMG = "https://image.tmdb.org/t/p/original/";
  return (
    <div className='flex items-center max-xl:gap-20 justify-between w-[80vw] max-xl:flex-wrap max-xl:justify-center'>
        <div className='w-[500px] h-[700px] max-sm:h-[400px]'>
            <img className='w-full h-full object-cover rounded-lg' src={API_IMG+detailsData.poster_path} alt="" />
        </div>
        <div className='flex flex-col gap-7 text-2xl w-[500px]'>
            <h2 className='text-blue-500'>Part of the journey is the end.</h2>
            <span>Budget: <span className='text-gray-500'>{detailsData?.budget}</span>$</span>
            <span>Movie:  <span className='text-gray-500'>{detailsData?.title}</span></span>
            <span>Release date:  <span className='text-gray-500'></span>{detailsData?.release_date}</span>
           <div>
           <span>Run time:</span> <span className='text-gray-500'>{detailsData?.runtime} min</span>
           </div>
            <span>Country:  <span className='text-gray-500'>{detailsData.origin_country}</span></span>
            <span>Adventure Action: <span className='text-gray-500'>{detailsData.tagline}</span>  </span>
        </div>
    </div>
  )
}

export default DetailsCenterInfo