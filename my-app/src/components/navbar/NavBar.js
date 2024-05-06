import {useState} from "react";
import {useRef} from "react";
import {useClickAway} from "react-use";
import NavBarLink from "./NavBarLink";
import NavSideBar from "./NavSideBar";
import {Squeeze as MenuIcon } from "hamburger-react";
import Palette from "../util/theme/Palette";
import { AnimatePresence, motion } from "framer-motion";
import { myname, myposition } from "../util/constants";

export default function NavBar(props){
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    // follow tailwindcss
    // nav bar class
    let navClassStyle =  `
        bg-navbg-color
        fixed
        w-screen
        py-3 
        px-5 
        flex
        items-center
        justify-between
    `;


    let titleClassStyle = `
        text-start
        text-base
        text-navtext-color
        py-2 
        px-7
        font-normal
        inline-block
        align-baseline
        leading-tight
    `;

    let subtitleClassStyle = `
        text-navtext-color
        text-sm
        font-extralight
    `;

    let iconStyle = `
    `;

    let blurDivVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        }
    }

    let titleVariants = {
        hidden: {
            opacity: 0,
            x: '-100%'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return(
        <>
        <div className={`${navClassStyle}`}>
            <AnimatePresence>
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <NavBarLink to="/" className ={titleClassStyle}>
                        { myname }
                        <br />
                        <span className={subtitleClassStyle}>
                            { myposition }
                        </span>
                    </NavBarLink>
                </motion.div>
            </AnimatePresence>
            <AnimatePresence>
            {
                isOpen && (
                    <>
                        <motion.div 
                        variants={blurDivVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className="fixed block left-0 top-0 w-screen h-screen bg-black/5 backdrop-blur-sm" onClick={()=>setOpen(false)}></motion.div>
                            <NavSideBar onLinkClick={()=>setOpen(false)} />
                    </>
                )
            }
            </AnimatePresence>
            <MenuIcon toggled={isOpen} toggle={setOpen} className={iconStyle} color={Palette.coffeePalette['dark-brown'][50]} size={18} duration={0.2}/>
        </div>
        </>
    );
}

