import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { logoText } from "../util/constants";
import {Squeeze as MenuIcon } from "hamburger-react";
import Palette from "../util/theme/Palette";
import { useEffect, useState } from "react"

export default function NavBar(props){
    const { isHome, isAboutMe, isProjects, isMilestones, isContactMe } = props;
    const [isOpen, setOpen] = useState(false);

    // follow tailwindcss
    // nav bar class
    let navClassStyle =  `
        bg-navbg-color/95
        fixed
        w-screen
        py-5 
        px-5 
        flex
        flex-wrap
        items-center
        justify-between
        z-50


    `;

    let navLinkContainer = `
        flex
        items-center
        justify-end

        max-lg:hidden
    `;

    let hamburgContainer=`
        lg:hidden
    `;

    let iconStyle = `
    `;

    let navLinkClass = `
        transition-all
        ease-in-out
        duration-200

        font-sans
        font-black 
        text-navtext-color
        text-2xl
        tracking-wider
        mx-3
        px-2
        group


    `;

    let navLinkNoTitleClass=`

        md:text-8xl
        sm:text-7xl
        text-4xl

        text-nowrap
        w-min
    `;

    let logoLinkClass = `
        font-mono
        text-lg
    `;

    let spanUnderlineClass = `


        block 
        max-w-0 
        group-hover:max-w-full 
        transition-all 
        duration-350 
        h-1 
        bg-navtextbg-hover-color

        max-lg:h-5
    `;

    let sidebarDiv = `
        w-screen
        h-screen
        fixed
        z-40
        pt-28
        p-8
        bg-navbg-color
        lg:hidden

        flex
        flex-col
    `;

    return(
        <>

            <motion.div 
                key="navBarKey"
                className={`${navClassStyle}`}
                initial={{
                    opacity: 0,
                    y: "-100%"
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.25,
                        ease: "easeInOut",
                    }
                }}
                exit={{
                    opacity: 0,
                    y: "-100%"
                }} 
            >

                <a href="#top" className={navLinkClass + logoLinkClass} onClick={()=>{setOpen(false)}}>
                    {logoText}
                </a>


                <div className={navLinkContainer}>

                    <a href="#aboutMeSection" className={navLinkClass}>
                        About Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>
                    <a href="#projectsSection" className={navLinkClass}>
                        Projects
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>
                    <a href="#milestonesSection" className={navLinkClass}>
                        Milestones
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>
                    <a href="#contactMeSection" className={navLinkClass}>
                        Contact Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>

                </div>

                <div className={hamburgContainer}>
                    <MenuIcon toggled={isOpen} toggle={setOpen} className={iconStyle} color={Palette.monoBluePalette['dark-blue'][500]} size={30} duration={0.2}/>
                </div>

                
            </motion.div>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            className={sidebarDiv}
                            initial={{
                                opacity: 0,
                                x: "100%"
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.25,
                                    ease: "easeInOut",
                                }
                            }}
                            exit={{
                                opacity: 0,
                                x: "100%"
                            }} 
                        >

                            <a href="#aboutMeSection" className={navLinkClass  + navLinkNoTitleClass} onClick={()=>{setOpen(false)}}>
                                About Me
                                <span className={spanUnderlineClass}>
                                </span>
                            </a>
                            <a href="#projectsSection" className={navLinkClass + navLinkNoTitleClass} onClick={()=>{setOpen(false)}}>
                                Projects
                                <span className={spanUnderlineClass}>
                                </span>
                            </a>
                            <a href="#milestonesSection" className={navLinkClass + navLinkNoTitleClass} onClick={()=>{setOpen(false)}}>
                                Milestones
                                <span className={spanUnderlineClass}>
                                </span>
                            </a>
                            <a href="#contactMeSection" className={navLinkClass + navLinkNoTitleClass} onClick={()=>{setOpen(false)}}>
                                Contact Me
                                <span className={spanUnderlineClass}>
                                </span>
                            </a>



                        </motion.div>
                    )
                }

            </AnimatePresence>




        </>
    );
}

