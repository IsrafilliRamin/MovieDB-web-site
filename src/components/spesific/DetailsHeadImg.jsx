import React from 'react'

const DetailsHeadImg = ({detailsData}) => {

    const API_IMG = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='max-xl:px-6 max-sm:mt-16'>
        <div className='max-xl:w-full max-sm:h-[400px]  w-[80vw] h-[600px] mt-14'>
            <img className='h-full w-full object-cover rounded-lg' src={API_IMG+detailsData?.backdrop_path} alt="" />
        </div>
        <div className='max-xl:w-full  border-2 flex flex-col gap-2 p-5 rounded-lg  w-[30vw] max-xl:left-0 relative left-20 bottom-20 bg-sky-600/20'>
            <h1 className='text-3xl'>{detailsData.title}</h1>
            <p className='text-2xl'>{detailsData.tagline}</p>
        </div>
    </div>
  )
}

export default DetailsHeadImg