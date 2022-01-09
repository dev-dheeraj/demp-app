import Discover from "../pages/Discover";

export const ALL_ROUTES = [
    {
        exact: true,
        path: '/',
        component: Discover,
    },
    {
        exact: true,
        path: '/shows',
        component: Discover,
    }
]