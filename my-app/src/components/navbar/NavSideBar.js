import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
// import { Minutemailer } from "@styled-icons/simple-icons/Minutemailer";
import { Email } from "@styled-icons/material-rounded/Email";
import { githubLink, linkedInLink, emailLink, instagramLink } from "../util/constants";

// import { Linkedin } from "@styled-icons/bootstrap/Linkedin";



export default function NavSideBar(props){
// 
    let { onLinkClick } = props;

    let barContainerStyle = `
        fixed 
        block 
        lg:w-3/12 
        w-screen
        h-screen 
        top-0 
        right-0 
        bg-navmenubg-color
        shadow-nav-shadow
        flex
        flex-col
        justify-between
    `;

    // navbar links class
    let textClassStyle = `
        text-navtext-color
        my-1
        py-2 
        px-7
        transition-all 
        ease-in-out 
        hover:scale-110
        hover:text-navtext-hover-color
        duration-300 
        inline-block
        align-baseline
        text-lg
        leading-tight
    `;


    let subtextClassStyle= `
        align-baseline
        text-sm
        font-light
    `;

    let barFooterStyle = `
        flex
        justify-around
        my-5
        mx-3
    `;

    let iconStyle = `
        size-5 
        text-navtext-color
        mx-1 
        hover:text-navtext-hover-color
        transition-all 
        ease-in-out 
        duration-300
    `;

    let ulVariants = {
        hidden: {
        },
        visible: {
            transition: {
                duration: 0.15,
                ease: "easeOut",
                delayChildren: 0.01,
                staggerChildren: 0.03
            }
        }
    }

    let liVariants = {
        hidden: {
            x: '60%',
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            }
        }
    }

    let iconContainerVariants={
        hidden: {
        },
        visible: {
            transition: {
                duration: 0.15,
                ease: "easeOut",
                delayChildren: 0.01,
                staggerChildren: 0.07
            }
        }
    }

    let iconVariants={
        hidden: {
            y: '60%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            }
        }
    }

    let sidebarVariants = {
        hidden: {
            x: '100%',
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.15,
                ease: "easeOut",
            }
        }

    }




    return (
    <>
        <motion.div 
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // initial={{x: '100%'}}
            // animate={{x: 0}}
            // exit={{x: '100%'}}
            // transition={{
            //     duration: 0.15,
            //     ease: "easeOut"
            // }}
            className={barContainerStyle}
        >
            <div className="h-1">
            </div>
            <motion.ul
                variants={ulVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
            >
                <motion.li variants={liVariants}>
                    <div className="flex justify-between">
                        <NavLink to="/" onClick={() => onLinkClick()} className={textClassStyle}>
                            Home
                            <br/> 
                            <span className={subtextClassStyle}>Where we started</span>
                        </NavLink>
                    </div>
                </motion.li>
                <motion.li variants={liVariants}>
                    <div className="flex justify-between">
                        <NavLink to="/AboutMe" onClick={() => onLinkClick()} className={textClassStyle}>
                            Biography 
                            <br/> 
                            <span className={subtextClassStyle}>My story</span>
                        </NavLink>
                    </div>
                </motion.li>
                <motion.li variants={liVariants}>
                    <div className="flex justify-between">
                        <NavLink to="/Projects" onClick={() => onLinkClick()} className={textClassStyle}>
                            My Craft 
                            <br/> 
                            <span className={subtextClassStyle}>Handcrafted works</span>
                        </NavLink>
                    </div>
                </motion.li>
                <motion.li variants={liVariants}>
                    <div className="flex justify-between">
                        <NavLink to="/Milestones" onClick={() => onLinkClick()} className={textClassStyle}>
                            My Journey 
                            <br/> 
                            <span className={subtextClassStyle}>Major events</span>
                        </NavLink>
                    </div>
                </motion.li>
            </motion.ul>
            <motion.div className={barFooterStyle}
            variants={iconContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            >
                <motion.div variants={iconVariants} className="inline-block">
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <Github className={iconStyle} /> 
                    </a>
                </motion.div>
                <motion.div variants={iconVariants} className="inline-block">
                    <a href={instagramLink} target="_blank" rel="noreferrer">
                        <Instagram className={iconStyle} /> 
                    </a>
                </motion.div>
                <motion.div variants={iconVariants} className="inline-block">
                    <a href={linkedInLink} target="_blank" rel="noreferrer">
                        <Linkedin className={iconStyle} /> 
                    </a>
                </motion.div>
                <motion.div variants={iconVariants} className="inline-block">
                    <a href={emailLink} target="_blank" rel="noreferrer">
                    {/* <Minutemailer className={iconStyle} />  */}
                        <Email className={iconStyle} /> 
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    </>
    );

}