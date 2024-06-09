import { myname } from "../../../../util/constants";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

export default function LeftSection(props){
    let nameText = myname

    // checks whether page is being loaded for the first time
    const [firstLoad, setFirstLoad] = useState(true);
    const [mainNameVisible, setMainNameVisible] = useState(true);


    let titleDiv=`
        p-16
    `;

    let nameClassStyle=`
        text-home-name-color
        font-sans
        text-8xl
        tracking-wider
        font-black
    `;

    let greetingClass=`
        text-navtext-color
        font-sans
        text-5xl
        font-bold
    `;


    let introClass=`
        text-navtext-color
        font-sans
        text-3xl
        font-bold
        mr-5
    `;


    let nameDiv = `
        w-screen
        h-screen 
        flex-col
        content-center
    `;


    let servicesDiv=`
        flex
        justify-center
        my-5
    `;


    let servicesClass=`
        text-navtext-color
        drop-shadow-lg
        text-lg
        font-light
        tracking-widest
    `;



    return(
    <>


        <div className={titleDiv}>
            <div>
            <TypeAnimation 
            sequence={[
                500,
                "Hi!",
                1000,
                "I'm",
            ]}
            wrapper="span"
            cursor={false}
            className={greetingClass}
            />

            </div>
            <div className="mb-3">
            <TypeAnimation 
            sequence={[
                2100,
                nameText,
                () => { setFirstLoad(false) }
            ]}
            wrapper="span"
            className={nameClassStyle}
            cursor={false}
            />
            </div>
            {
                !firstLoad &&(
                    <div>
                        <TypeAnimation 
                        sequence={[
                            // 4000,
                            1000,
                            "Independent developer",
                            1000,
                            "Independent creator",
                            1000,
                            "Independent designer",
                            1000,
                            "Independent artist",

                        ]}
                        className={introClass}
                        cursor={false}
                        repeat={Infinity}
                        speed={50}
                        />
                    </div>

                )

            }
        </div>

    </>
    );
}