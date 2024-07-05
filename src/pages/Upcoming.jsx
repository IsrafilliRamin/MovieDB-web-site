import React, { useEffect } from 'react'
import MainTag from '../components/spesific/MainTag'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../data/data'
import { getAllData, handleNavData } from '../redux/createSlice/counterSlice'

const Upcoming = () => {
  let { movieName } = useSelector(state => state.allState)
  const dispatch = useDispatch()


  useEffect(() => {
      if (movieName === "") {
          movieName = "popular"
          getData(movieName).then(resp => dispatch(getAllData(resp.results)))
      } else {
          getData(movieName).then(resp => dispatch(handleNavData(resp.results)))
      }
  }, [movieName])
  return (
    <div>
      <MainTag/>
      
    </div>
  )
}

export default Upcoming