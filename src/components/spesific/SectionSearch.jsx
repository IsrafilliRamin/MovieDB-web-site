import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData, getSearchValue, searchSubmit } from '../../redux/createSlice/counterSlice';
import { getData } from '../../data/data';
const SectionSearch = () => {

    const { data, searchValue, movieName } = useSelector(state => state.allState);
    const dispatch = useDispatch()

    /* https://api.themoviedb.org/3/search/movie?api_key=20325b57b63187bb9a782879cbcc0ac5&query=${value} */


    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=20325b57b63187bb9a782879cbcc0ac5&query=${searchValue}`)
        const data = await response.json();
        if (searchValue === "") {
            getData("popular").then(resp => dispatch(searchSubmit(resp.results)))
            console.log("test if");
        } else {
            console.log("elseSearc");
            dispatch(searchSubmit(data.results));
        }
    }


    return (
        <section className='max-sm:px-3 px-20 py-20 max-lg:w-[100%] w-6/12 flex flex-col gap-8'>
            <h1 className='font-bold text-7xl max-sm:text-4xl'>MovieDB</h1>
            <p className='text-gray-500'>List of movies and TV Shows, I, Pramod Poudel have watched till date.
                Explore what I have watched and also feel free to make a suggestion. 😉</p>
            <form onSubmit={submit} className='bg-inputColor border-2 rounded-lg border-borderInput flex items-center justify-end flex-row-reverse max-lg:w-fit w-7/12 max-sm:!w-[90vw]' action="">
                <label htmlFor="">
                    <input value={searchValue} onChange={(e) => dispatch(getSearchValue(e.target.value))} placeholder='Search movie' className='border-none outline-none bg-inherit p-2 max-lg:w-fit w-[270px] placeholder-slate-600' type="text" />
                </label>
                <button className='bg-transparent'><SearchIcon className='text-slate-600' /></button>
            </form>
            <span className='text-slate-300'>ALL({data?.length})</span>
        </section>
    )
}

export default SectionSearch