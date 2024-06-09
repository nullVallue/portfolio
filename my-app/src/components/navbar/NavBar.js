import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function NavBar(props){
    const { isHome, isAboutMe, isProjects, isMilestones, isContactMe } = props;

    // follow tailwindcss
    // nav bar class
    let navClassStyle =  `
        bg-navbg-color/95
        fixed
        w-screen
        py-5 
        px-5 
        flex
        items-center
        justify-end
        z-50

    `;

        // transition
        // duration-400
        // ease-out
        // -translate-y-12
        // hover:-translate-y-0


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

    let spanUnderlineClass = `


        block 
        max-w-0 
        group-hover:max-w-full 
        transition-all 
        duration-350 
        h-1 
        bg-navtextbg-hover-color
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


                <a href="#top" className={navLinkClass}>
                    Home
                    <span className={spanUnderlineClass}>
                    </span>
                </a>

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



                {/* {
                    isHome?(
                    <a href="#top" className={navLinkClass}>
                        Home
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>):
                    (<NavLink to="/" className={navLinkClass}>
                        Home
                        <span className={spanUnderlineClass}>
                        </span>
                    </NavLink>)
                }
                {
                    isAboutMe?
                    (<a href="#top" className={navLinkClass}>
                        About Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>):
                    (<NavLink to="/AboutMe" className={navLinkClass}>
                        About Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </NavLink>)
                }
                {
                    isProjects?
                    (<a href="#top" className={navLinkClass}>
                        Projects
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>):
                    (<NavLink to="/Projects" className={navLinkClass}>
                        Projects
                        <span className={spanUnderlineClass}>
                        </span>
                    </NavLink>)
                }
                {
                    isMilestones?
                    (<a href="#top" className={navLinkClass}>
                        Milestones
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>):
                    (<NavLink to="/Milestones" className={navLinkClass}>
                        Milestones
                        <span className={spanUnderlineClass}>
                        </span>
                    </NavLink>)
                }
                {
                    isContactMe?
                    (<a href="#top" className={navLinkClass}>
                        Contact Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </a>):
                    (<NavLink to="/ContactMe" className={navLinkClass}>
                        Contact Me
                        <span className={spanUnderlineClass}>
                        </span>
                    </NavLink>)
                } */}
                
            </motion.div>


        </>
    );
}

