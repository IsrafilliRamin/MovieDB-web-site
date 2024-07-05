import React, { useEffect, useState } from 'react'
import DetailsHeadImg from '../components/spesific/DetailsHeadImg'
import { useParams } from 'react-router'
import DetailsCenterInfo from '../components/spesific/DetailsCenterInfo';

const DetailsMovie = () => {
    const [detailsData, setDetailsData] = useState({});

    const { id } = useParams();



    useEffect(() => {
        const getDetailsData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20325b57b63187bb9a782879cbcc0ac5&language=en-US`)
            const data = await response.json();
            setDetailsData(data)
        }
        getDetailsData()
    }, [id])

    return (
        <div className='flex flex-col items-center max-sm:gap-2 gap-16 justify-center max-sm:py-2 py-10'>
            <DetailsHeadImg detailsData={detailsData} />
            <DetailsCenterInfo detailsData={detailsData} />
        </div>
    )
}

export default DetailsMovie