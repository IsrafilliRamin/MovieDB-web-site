import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



const counterSlice = createSlice({
    name: "counter",
    initialState: {
        watchlistCount: JSON.parse(localStorage.getItem("watchCount")) ? JSON.parse(localStorage.getItem("watchCount")) : 0,
        data: JSON.parse(localStorage.getItem('heart')) ? JSON.parse(localStorage.getItem('heart')) : [],
        movieName: "",
        searchValue: "",
        favoriteHeartArray: JSON.parse(localStorage.getItem('watchlist')) ? JSON.parse(localStorage.getItem('watchlist')) : [],
        infoMesaj: [],
        editMovies:[],
        allEditVal:{}
    },
    reducers: {

        getAllData: (state, action) => {

            state.data = state.data.length > 0 ? state.data : action.payload;
        },
        handleNavData: (state, action) => {
            state.data = action.payload;
        },
        watchlistFun: (state, action) => {
            state.watchlistCount += 1;
            localStorage.setItem("watchCount", JSON.stringify(state.watchlistCount));
        },
        getNameMovies: (state, action) => {
            state.movieName = action.payload;
        },
        getSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        brokenHeart: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        adult: !item.adult
                    }


                }
                return item
            });
            localStorage.setItem('heart', JSON.stringify(state.data))

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "❤️ Added to your watchlist"
            });
            state.data.map((item) => {
                if (item.id === action.payload) {
                    state.watchlistCount++;
                    localStorage.setItem("watchCount", JSON.stringify(state.watchlistCount));
                    state.favoriteHeartArray.push(item);
                    localStorage.setItem('watchlist', JSON.stringify(state.favoriteHeartArray))
                }
            });
        },
        favoriteHeart: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        adult: !item.adult
                    }

                }
                return item
            })

            localStorage.setItem("heart", JSON.stringify(state.data));
            state.data.map((item) => {
                if (item.id === action.payload) {
                    state.favoriteHeartArray = state.favoriteHeartArray.filter((item) => item.id !== action.payload)
                    state.watchlistCount = state.favoriteHeartArray.length;
                    localStorage.setItem("watchCount", JSON.stringify(state.watchlistCount));
                    localStorage.setItem('watchlist', JSON.stringify(state.favoriteHeartArray))
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "💔 Deleted from your watchlist"
                    });
                } else {
                    state.favoriteHeartArray = state.favoriteHeartArray.filter((item) => item.id !== action.payload)
                    state.watchlistCount = state.favoriteHeartArray.length;
                    localStorage.setItem('watchlist', JSON.stringify(state.favoriteHeartArray))
                }


            });
        },
        getInfoMesaj: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload) {

                    return {
                        ...item,
                        isLoad: !item.isLoad,
                    };
                }

                return item;
            });
        },
        searchSubmit: (state, action) => {

            state.data = action.payload
        },
        deleteMovies: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
           
            Swal.fire({
                icon: "error",
                title: "Movie Deleted",
               /*  text: "Something went wrong!", */
              });
        },
        editMovies: (state, action) => {
            state.data = state.data.map(item=>{
                if(item.id === action.payload){
                    return {
                        ...item,
                        title:state.allEditVal.title,
                        original_title: state.allEditVal.originalTitle
                    };
                };
                return item;
            });
        },
        getEditAllValues: (state, action) => {
            state.allEditVal = action.payload
        },
    }
})


export const { watchlistFun,
    getAllData,
    getNameMovies,
    getSearchValue,
    brokenHeart,
    favoriteHeart,
    getInfoMesaj,
    searchSubmit,
    handleNavData,
    deleteMovies,
    getEditAllValues,
    editMovies } = counterSlice.actions
export default counterSlice.reducer