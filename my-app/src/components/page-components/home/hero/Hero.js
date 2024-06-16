import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

export default function Hero(){


    let heroSectionClass=`
        flex
        flex-wrap
    `;

    let leftSectionClass=`
        transition-all
        duration-200
        lg:w-1/2
        w-full
        h-screen 
        bg-home-namebg-color
        flex-col
        justify-center 
        content-center


        transition-all
        duration-200
    `;


    let rightSectionClass=`
        lg:w-1/2
        lg:inline-block
        hidden


        w-full
        h-screen 
        bg-home-hero-right-color
        flex-col
        justify-center
        content-center
        


        transition-all
        duration-200
    `;


    return (
        <>
            <div className={heroSectionClass}>
                <div className={leftSectionClass}>
                    <LeftSection/>
                </div>

                <div className={rightSectionClass}>
                    <RightSection />
                </div>
            </div>

        </>
    );

}