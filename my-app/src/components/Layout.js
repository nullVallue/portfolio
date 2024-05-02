import { Suspense } from "react";
import NavBar from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Loader from "./navbar/Loader";

export default function Layout(){
    return(
        <div className="bg-bodybg-color h-screen w-screen">
            <NavBar />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}