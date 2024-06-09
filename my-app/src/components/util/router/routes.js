import React from "react";
import ContactMe from "../../pages/contactMe/ContactMe";

const Home = React.lazy(() => import("../../pages/home/Home"));
const AboutMe = React.lazy(() => import("../../pages/aboutMe/AboutMe"));
const Projects = React.lazy(() => import("../../pages/projects/Projects"));
const Milestones = React.lazy(() => import("../../pages/milestones/Milestones"));

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
    {
        path: "/ContactMe",
        element: <ContactMe />
    },
];

export default ROUTES;