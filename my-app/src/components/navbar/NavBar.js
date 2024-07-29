import { AnimatePresence, motion } from "framer-motion";
import { logoText } from "../util/constants";
import {Squeeze as MenuIcon } from "hamburger-react";
import Palette from "../util/theme/Palette";
import { useState } from "react"

export default function NavBar(props){
    // const { isHome, isAboutMe, isProjects, isMilestones, isContactMe } = props;
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

        max-sm:py-3
        max-sm:px-3

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
        text-navtext-color
        text-xl
        tracking-wider
        mx-3
        px-2
        group

    `;

    let navLinkNotTitle=`
        font-extrabold
    `;

    let navLinkNoTitleClass=`

        md:text-8xl
        sm:text-7xl
        text-4xl

        font-black

        text-nowrap
        w-min
    `;

    let logoLinkClass = `
        font-mono
        font-black
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
        max-md:h-3
        max-sm:h-2
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

                <a href="#top" className={logoLinkClass + navLinkClass } onClick={()=>{setOpen(false)}}>
                    {logoText}
                </a>


                <div className={navLinkContainer}>

                    <a href="#aboutMeSection" className={navLinkClass + navLinkNotTitle}>
                        About Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>
                    <a href="#skillsSection" className={navLinkClass + navLinkNotTitle}>
                        Skills
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>
                    <a href="#projectsSection" className={navLinkClass + navLinkNotTitle}>
                        Projects
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>
                    <a href="#contactMeSection" className={navLinkClass + navLinkNotTitle}>
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
                            <a href="#skillsSection" className={navLinkClass + navLinkNoTitleClass} onClick={()=>{setOpen(false)}}>
                                Skills 
                                <span className={spanUnderlineClass}>
                                </span>
                            </a>
                            <a href="#projectsSection" className={navLinkClass + navLinkNoTitleClass} onClick={()=>{setOpen(false)}}>
                                Projects
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

