import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeartIcon from '../common/HeartIcon'
import ShareIconMov from '../common/ShareIcon'
import moviDBLogo from "../../assets/logoDB.png"
import { useDispatch, useSelector } from 'react-redux'
import { getNameMovies } from '../../redux/createSlice/counterSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router';
const Header = () => {
    const {watchlistCount} = useSelector(state=>state.allState)
    const dispatch = useDispatch();
    const signupData = JSON.parse(localStorage.getItem('signin'))
    const navigate = useNavigate();
    const ref = useRef();

    const logOut = () =>{
        localStorage.removeItem('signin');
        navigate("/");
    };

    console.log();

    const handleNavBar = ()=>{
        if(ref.current.className.includes("max-lg:left-[-100%]") === true){
            ref.current.classList.add("max-lg:left-[0%]");
            ref.current.classList.remove("max-lg:left-[-100%]");
        }else{
            ref.current.classList.remove("max-lg:left-[0%]");
            ref.current.classList.add("max-lg:left-[-100%]");
        };
    };


    return (
        <div className='flex justify-between w-full bg-blue-950 h-20 items-center max-sm:px-3 px-20 fixed top-0 z-30'>
            <div className="h-12 w-12">
                <Link onClick={()=>dispatch(getNameMovies("popular"))} to="/home"><img className='h-full' src={moviDBLogo} alt="movidbLogo" /></Link>
            </div>
            <nav className='flex gap-7 items-center transition duration-700 ease-in-out'>
                <ul ref={ref} className='flex gap-7 transition duration-700 ease-in-out  items-center max-lg:flex-col max-lg:justify-between max-lg:py-20  max-lg:absolute max-lg:h-[100vh] max-lg:bg-black max-lg:w-60 max-lg:left-[-100%] max-lg:top-0'>
                    <li><NavLink onClick={()=>dispatch(getNameMovies("popular"))} to={"/home"}>Latest</NavLink></li>
                    <li><NavLink onClick={()=>dispatch(getNameMovies("now_playing"))} to={"/nowplaying"}>Now Playing</NavLink></li>
                    <li><NavLink onClick={()=>dispatch(getNameMovies("popular"))} to={"/popular"}>Popular</NavLink></li>
                    <li><NavLink onClick={()=>dispatch(getNameMovies("top_rated"))} to={"/toprated"}>Top Rated</NavLink></li>
                    <li><NavLink onClick={()=>dispatch(getNameMovies("upcoming"))} to={"/upcoming"}>Upcoming</NavLink></li>
                    
                </ul>
                <div className='flex gap-7 items-center'>
            {signupData?.user === "user"  ?    <NavLink to="favoritelist"><div className="relative"><FavoriteIcon  className='text-red-500 max-sm:!text-4xl' /> <div className='absolute top-[-7px] right-[-7px] bg-blue-400 text-white rounded-full w-[17px] h-[17px] flex items-center justify-center'>{watchlistCount}</div></div></NavLink>  
                       : ""  }    
               <div className="flex items-center justify-center gap-3" > <AccountBoxIcon titleAccess='Log out' onClick={()=>logOut()} className='cursor-pointer max-sm:!text-4xl' /> {signupData ? <span className='text-green-400'>{signupData.nameFirst} <span className='border-b capitalize text-yellow-300 border-blue-400'>- {signupData.user}</span> </span> : <span>Guest</span> }   </div> 
               <MenuIcon onClick={()=>handleNavBar()} className='lg:invisible  max-lg:hidden max-sm:!text-4xl'/>
                </div>
            </nav>
        </div>
    )
}

export default Header