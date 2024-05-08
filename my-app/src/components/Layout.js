import { Suspense } from "react";
import NavBar from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Loader from "./util/Loader";
import ParticleBg from "./particle_bg/ParticleBg";

export default function Layout(){
    return(
        <>
            <ParticleBg />
            <div className="bg-gradient-to-b from-bodybg-color to-bodybg-gradientstop-color h-screen w-screen">
                <NavBar />
                <main>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </>
    )
}