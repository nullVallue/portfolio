import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";


/**------------------------------------------------------------------------
 *                           Page Components
 *------------------------------------------------------------------------**/
import NavBar from "../../navbar/NavBar";
import LeftSection from "../../page-components/home/hero/leftSection/LeftSection";
import RightSection from "../../page-components/home/hero/rightSection/RightSection";
import FeaturedProjects from "../../page-components/home/featuredProjects/FeaturedProjects";
import AboutMe from "../../page-components/home/aboutMe/AboutMe";
import Skills from "../../page-components/home/skills/Skills";
import Projects from "../../page-components/home/projects/Projects";

export default function Home(props){


    const[showNavBar, setShowNavBar] = useState(false);

    let heroSectionClass=`
        flex
    `;

    let leftSectionClass=`
        w-1/2
        h-screen 
        bg-home-namebg-color
        flex-col
        justify-center 
        content-center
    `;


    let rightSectionClass=`
        w-1/2
        h-screen 
        bg-home-hero-right-color
        flex-col
        justify-center
        content-center
    `;





    return (
        <>
            <AnimatePresence>
                {
                    showNavBar && (
                            <NavBar isHome={true} />
                    )
                }
            </AnimatePresence>


            <motion.div 
                id="top"
                className={heroSectionClass}
                onViewportLeave={()=>{ setShowNavBar(true); }}
                onViewportEnter={()=>{ setShowNavBar(false); }}
            >


                <div className={leftSectionClass}>
                    <LeftSection/>
                </div>

                <div className={rightSectionClass}>
                    <RightSection />
                </div>


            </motion.div>

            <div id="aboutMeSection">
                <AboutMe/>
            </div>

            <div>
                <Skills/>
            </div>

            <div>
                <Projects />
            </div>

            <div className="w-screen h-screen bg-white">
            </div>



            {/* <div className={nameDiv}>
                <div className={titleDiv}>
                    <TypeAnimation 
                    sequence={[
                        500,
                        "Hi,",
                        1000,
                        "Hi, I'm",
                    ]}
                    wrapper="span"
                    cursor={false}
                    className={greetingClass}
                    />
                    <TypeAnimation 
                    sequence={[
                        2000,
                        nameText,
                        () => { setFirstLoad(false) }
                    ]}
                    wrapper="span"
                    className={nameClassStyle}
                    cursor={false}
                    />
                </div>
                {
                    !firstLoad &&
                    <div 
                    className={servicesDiv}
                    >
                        <TypeAnimation 
                        sequence={[
                            "Fullstack Developer",
                            1500,
                            "Graphic Designer",
                            1500,
                            "Illustrator",
                            1500,
                            "UI Designer",
                            1500,
                            "Video Editor",
                            1500,
                        ]}
                        repeat={Infinity}
                        className={servicesClass}
                        />
                    </div>
                }
            </div>
            <div className="bg-home-rolesbg-color w-screen h-screen relative z-10">
            </div> */}

        </>
    );

}