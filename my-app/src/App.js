import './App.css';
import { router } from "./components/router/router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}