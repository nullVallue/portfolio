import { myname } from "../../../../util/constants";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

export default function LeftSection(props){
    let nameText = myname

    // checks whether page is being loaded for the first time
    const [firstLoad, setFirstLoad] = useState(true);


    let titleDiv=`
        sm:p-16
        p-5
    `;

    let nameClassStyle=`
        text-home-name-color
        font-sans
        xl:text-8xl
        lg:text-7xl
        md:text-8xl
        text-5xl
        tracking-wider
        font-black

        transition-all
        duration-200
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