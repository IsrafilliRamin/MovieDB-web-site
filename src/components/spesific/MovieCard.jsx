import * as React from 'react';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import LogoMovie from "../../assets/logoDB.png"
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { brokenHeart, deleteMovies, favoriteHeart, getAllData, getInfoMesaj } from '../../redux/createSlice/counterSlice';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import SpringModal from './Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import FormModal from './FormModal';








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

export default function RecipeReviewCard() {


    const { data } = useSelector(state => state.allState);
    const API_IMG = "https://image.tmdb.org/t/p/w500";
    const dispatch = useDispatch();


    console.log(data);



/* item center a function yazilsin */
    return (
        <div className='flex flex-wrap  justify-between max-sm:justify-center gap-10'>
            {
                data?.map((item) => (


                    <Card   className='max-sm:!w-[90vw] !bg-transparent border-2   !border-borderBox !rounded-xl !duration-300 w-[300px] !transition-all !ease-in-out  !text-textColor   shadow-none hover:shadow-custom-hover' sx={{ maxWidth: 345 }}>
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
                                className='cursor-pointer !w-[350px] !h-[370px] !p-[4px] !rounded-xl '
                                component="img"
                                height="194"
                                image={API_IMG + item.poster_path}
                                alt="Paella dish"
                            />
                        </Link>
                        <CardContent className='!relative'>
                            <Typography  className='!text-white' variant="body2" color="text.secondary">
                                {item.title}
                            </Typography>
                        </CardContent>
                        <CardActions className='flex items-start' disableSpacing>
                            <IconButton aria-label="add to favorites">
                                {item.adult ? <FavoriteIcon onClick={() => dispatch(favoriteHeart(item.id))} className='text-red-500' /> : <HeartBrokenIcon onClick={() => dispatch(brokenHeart(item.id))} className='text-red-800' />}
                            </IconButton>
                            <IconButton aria-label="share">
                                <SpringModal> <ShareIcon className='text-white' /> </SpringModal>
                            </IconButton>

                            <IconButton className='relative left-5' aria-label="delete">
                                <DeleteIcon onClick={()=>dispatch(deleteMovies(item.id))} className='text-purple-500' />
                            </IconButton>
                            <IconButton className='relative left-5' aria-label="delete">
                                <FormModal  item={item}> <CreateIcon className='text-yellow-500' /></FormModal>
                               
                            </IconButton>

                            <ExpandMore
                                expand={item.isLoad}
                                onClick={() => dispatch(getInfoMesaj(item.id))}
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

                ))
            }
        </div >

    );
}
