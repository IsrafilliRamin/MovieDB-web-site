import HomeLayout from "../components/spesific/HomeLayout";
import DetailsMovie from "../pages/DetailsMovie";
import Home from "../pages/Home";
import NowPlaying from "../pages/NowPlaying";
import Popular from "../pages/Popular";
import Sharing from "../pages/Sharing";
import TopRated from "../pages/TopRated";
import Upcoming from "../pages/Upcoming";
import FavoriteList from "../pages/FavoriteList";



export const ROUTER = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/nowplaying",
                element: <NowPlaying />
            },
            {
                path: "/popular",
                element: <Popular />
            },
            {
                path: "/toprated",
                element: <TopRated />
            },
            {
                path: "/upcoming",
                element: <Upcoming />
            },
            {
                path: "/sharing",
                element: <Sharing />
            },
            {
                path: "/favoritelist",
                element: <FavoriteList />
            },
            {
                path: "/details/:id",
                element: <DetailsMovie />
            }
        ]
    },

]