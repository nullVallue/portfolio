import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


/**------------------------------------------------------------------------
 *                           Page Components
 *------------------------------------------------------------------------**/
import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer"; 
import AboutMe from "../../page-components/home/aboutMe/AboutMe";
import Skills from "../../page-components/home/skills/Skills";
import Projects from "../../page-components/home/projects/Projects";
import Hero from "../../page-components/home/hero/Hero";

export default function Home(props){

    const breakpoint = 1024;

    const[showNavBar, setShowNavBar] = useState(false);
    const[alwaysShowNavBar, setAlwaysShowNavBar] = useState(false);
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    const onWindowWidthChange = () => {
        setWindowWidth(window.innerWidth);

        if(window.innerWidth < breakpoint){
            setAlwaysShowNavBar(true);
        }
        else{
            setAlwaysShowNavBar(false);
        }

    }

    useEffect(()=>{
        if(window.innerWidth < breakpoint) setAlwaysShowNavBar(true);
        window.addEventListener("resize", onWindowWidthChange);
        return () => window.removeEventListener("resize", onWindowWidthChange);
    }, []);

    return (
        <>
            <AnimatePresence>
                {
                    (showNavBar || alwaysShowNavBar) && (
                            <NavBar isHome={true} />
                    )
                }
            </AnimatePresence>


            <motion.div 
                id="top"
                onViewportLeave={()=>{ setShowNavBar(true); }}
                onViewportEnter={()=>{ if(!alwaysShowNavBar) setShowNavBar(false); }}
            >


                <Hero />

            </motion.div>

            {/* spacer to show navbar when in about me section */}
            <div className="bg-home-aboutme-bgcolor h-1" />

            <div>
                <AboutMe/>
            </div>

            <div>
                <Skills/>
            </div>

            <div>
                <Projects />
            </div>

            {/* <div>
                <Milestones />
            </div> */}

            {/* <div className="w-screen h-screen bg-white">
            </div> */}

            <Footer />


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