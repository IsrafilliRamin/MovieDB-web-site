import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import LogoMovie from "../assets/logoDB.png"
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { brokenHeart, favoriteHeart, getAllData } from '../redux/createSlice/counterSlice';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
  }),
}));





const FavoriteList = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const {favoriteHeartArray,data} = useSelector(state=>state.allState)

  const dispatch = useDispatch();


  .log(favoriteHeartArray);

  const handleExpandClick = (id) => {
      const updatedData = data.map((item) => {
          if (item.id === id) {
              return {
                  ...item,
                  isLoad: !item.isLoad,
              };
          }
          return item;
      });
      dispatch(getAllData(updatedData));
  };

  return (
    <div className='flex flex-wrap  justify-start gap-10 px-20 py-10 mt-20'>
        {
         favoriteHeartArray.length > 0 ?
          ( favoriteHeartArray?.map((item) => (


            <Card className='!bg-transparent border-2   !border-borderBox !rounded-xl !duration-300 w-[300px] !transition-all !ease-in-out  !text-textColor   shadow-none hover:shadow-custom-hover' sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "transparent" }} aria-label="recipe">
                            <img src={LogoMovie} alt="" />
                        </Avatar>
                    }
                    action={
                        <IconButton className='text-yellow-500 flex items-center gap-1' aria-label="settings">
                            {/* <MoreVertIcon /> */} <StarIcon className='text-yellow-500' /> <div className='text-yellow-500 text-sm'>{item.vote_average}</div>
                        </IconButton>
                    }
                    title={item.original_title}
                    subheader={item.release_date}
                />
                <Link to={"/details/" + item.id}>
                    <CardMedia
                        className='cursor-pointer !w-[350px] !h-[370px] !p-[4px] !rounded-xl'
                        component="img"
                        height="194"
                        image={API_IMG + item.poster_path}
                        alt="Paella dish"
                    />
                </Link>
                <CardContent className='!relative'>
                    <Typography variant="body2" color="text.secondary">
                        {item.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                  {item.adult ? <FavoriteIcon onClick={()=>dispatch(favoriteHeart(item.id))} className='text-red-500' />   : <HeartBrokenIcon onClick={()=>dispatch(brokenHeart(item.id))} className='text-red-800'/>  } 
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon className='text-white' />
                    </IconButton>
                    <ExpandMore
                        expand={item.isLoad}
                        onClick={() => handleExpandClick(item.id)}
                        aria-expanded={item.isLoad}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon className='text-white' />
                    </ExpandMore>
                </CardActions>
                <Collapse in={item.isLoad} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>MovieInfo:</Typography>
                        <Typography className='text-white' paragraph>
                            {item.overview}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        )))  : (<div className='h-[80vh] w-full text-center text-7xl flex items-center justify-center text-white'>Favorite List is Empty</div>)
        }
    </div >

);
}

export default FavoriteList


