import {motion } from "framer-motion";

export default function NavSideBar(props){
// 
    let barContainerStyle = `
        fixed 
        block 
        w-3/12 
        h-screen 
        top-0 
        right-0 
        bg-black
        shadow-nav-shadow
    `;

    return (
    <>
        <motion.div 
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{
                duration: 0.15,
                ease: "easeOut"
            }}
            className={barContainerStyle}
        >
        </motion.div>
    </>
    );

}