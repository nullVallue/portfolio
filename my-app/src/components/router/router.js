import {
    createBrowserRouter,
} from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: ROUTES
    }
]
);