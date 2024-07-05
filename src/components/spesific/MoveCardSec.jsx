import React, { useEffect } from 'react'
import RecipeReviewCard from './MovieCard'
import { getData } from '../../data/data'
import { useSelector } from 'react-redux'

const MoveCardSec = () => {



  return (
    <div className='max-sm:px-0  px-20 pb-14'>
        <RecipeReviewCard/>
    </div>
  )
}

export default MoveCardSec