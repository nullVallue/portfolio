import { squircle  } from 'ldrs';
import { AnimatePresence, motion } from "framer-motion";

export default function Loader(){

    squircle.register();

    return (
        <>
                <div 
                    className="
                        bg-loaderbg-color
                        h-screen
                        w-screen
                        flex
                        justify-center
                        items-center
                    "
                >
                    <l-squircle 
                        size="30" 
                        stroke="7" 
                        bg-opacity="0" 
                        color="white"
                    />
                </div>
        </>
    )
}