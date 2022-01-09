import DiscoverShows from "../pages/Discover/DiscoverShows";

export const ALL_ROUTES = [
    {
        exact: true,
        path: '/',
        component: DiscoverShows,
    },
    {
        exact: true,
        path: '/shows',
        component: DiscoverShows,
    }
]