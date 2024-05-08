import { myname } from "../util/constants";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home(props){

    let nameText = myname

    // checks whether page is being loaded for the first time
    const [firstLoad, setFirstLoad] = useState(true);
    const [mainNameVisible, setMainNameVisible] = useState(true);

    let nameDiv = `
        w-screen
        h-screen 
        flex-col
        content-center
    `;

    let titleDiv=`
        flex
        justify-center
    `;

    let servicesDiv=`
        flex
        justify-center
        my-5
    `;

    let nameClassStyle=`
        text-home-name-color
        drop-shadow-lg
        font-serif
        text-5xl
        tracking-wider
        font-semi-bold
    `;

    let greetingClass=`
        text-navtext-color
        drop-shadow-lg
        font-serif
        text-2xl
        font-normal
        mr-5
    `;

    let servicesClass=`
        text-navtext-color
        drop-shadow-lg
        text-lg
        font-light
        tracking-widest
    `;

    return (
        <>
            <div className={nameDiv}>
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
            <div className="bg-home-rolesbg-color w-screen h-screen z-10 relative">
            </div>
        </>
    );

}