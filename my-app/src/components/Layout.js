import { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./util/Loader";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout(){

    // const navigation = useNavigation();

    return(
        <>

        <div className="no-scrollbar overflow-y-scroll scroll-smooth">
            <div className="h-screen w-screen">
                <main>
                    <Suspense fallback={<Loader />}>
                        {/* {
                            navigation.state === "loading"? 
                            <Loader />
                            : 
                            <Outlet /> 
                        } */}
                        <AnimatePresence>
                            <motion.div
                                initial={{x: 0}} 
                                animate={{
                                    x: "-100%",
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 0.2,
                                    }
                                }}
                                exit={{ x: 0}}
                                className="
                                    absolute
                                    inset-0
                                    w-screen
                                    h-screen
                                    bg-loaderbg-color
                                    z-50
                                "
                            >
                            </motion.div>
                        </AnimatePresence>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>

        </>
    )
}