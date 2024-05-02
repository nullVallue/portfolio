import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const AboutMe = React.lazy(() => import("../pages/AboutMe"));
const Projects = React.lazy(() => import("../pages/Projects"));

export const ROUTES = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/AboutMe",
        element: <AboutMe />
    },
    {
        path: "/Projects",
        element: <Projects />
    },
];

export default ROUTES;