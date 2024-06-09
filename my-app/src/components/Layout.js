import { Suspense } from "react";
import NavBar from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Loader from "./util/Loader";
import ParticleBg from "./particle_bg/ParticleBg";

export default function Layout(){
    return(
        <>
        <div className="no-scrollbar overflow-y-scroll scroll-smooth">
            {/* <ParticleBg /> */}
            <div className="h-screen w-screen">
                {/* <NavBar /> */}
                {/* <div className="fixed top-0 left-0 h-screen w-screen bg-black/90"></div> */}
                <main>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>

        </div>
        </>
    )
}