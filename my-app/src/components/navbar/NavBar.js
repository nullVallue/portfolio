import {useState} from "react";
import {useRef} from "react";
import {useClickAway} from "react-use";
import NavBarLink from "./NavBarLink";
import NavSideBar from "./NavSideBar";
import {Squeeze as MenuIcon } from "hamburger-react";
import Palette from "../theme/Palette";
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar(props){
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    // follow tailwindcss
    // nav bar class
    let navClassStyle =  `
        bg-navbg-color
        py-3 
        px-5 
        flex
        items-center
        justify-between
    `;

    // navbar links class
    let textClassStyle = `
        text-navtext-color
        py-2 
        px-7
        transition-all 
        ease-in-out 
        hover:text-xl 
        duration-300 
        inline-block
        align-baseline
    `;

    let titleClassStyle = `
        text-navtext-color
        text-start
        text-base
        py-2 
        px-7
        font-normal
        inline-block
        align-baseline
        leading-tight
    `;

    let subtitleClassStyle = `
        text-sm
        font-extralight
    `;

    let iconStyle = `
    `;

    const sidebarVariants = {
        opened: { x: 0 },
        closed: { x: '100%'},
    }

    return(
        <>
        <div className={navClassStyle}>
            <NavBarLink href='#' className={titleClassStyle}>
                <Link to="/">
                    Wei Jian
                    <br />
                    <span className={subtitleClassStyle}>
                        Fullstack Developer
                    </span>
                </Link>
            </NavBarLink>
            <AnimatePresence>
            {
                isOpen && (
                    <>
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className="fixed block left-0 top-0 w-screen h-screen bg-black/5 backdrop-blur-sm" onClick={()=>setOpen(false)}></motion.div>
                            <NavSideBar />
                    </>
                )
            }
            </AnimatePresence>
            <MenuIcon toggled={isOpen} toggle={setOpen} className={iconStyle} color={Palette.monoBluePalette.white} size={18} duration={0.2}/>
        </div>
        </>
    );
}

