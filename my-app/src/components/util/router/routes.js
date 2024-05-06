import React from "react";

const Home = React.lazy(() => import("../../pages/Home"));
const AboutMe = React.lazy(() => import("../../pages/AboutMe"));
const Projects = React.lazy(() => import("../../pages/Projects"));
const Milestones = React.lazy(() => import("../../pages/Milestones"));

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
    {
        path: "/Milestones",
        element: <Milestones />
    },
];

export default ROUTES;