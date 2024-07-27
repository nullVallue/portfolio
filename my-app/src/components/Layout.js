import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./util/Loader";

export default function Layout(){
    return(
        <>

        <div className="no-scrollbar overflow-y-scroll scroll-smooth">
            <div className="h-screen w-screen">
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