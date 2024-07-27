import { backEndLogos, frontEndLogos, othersLogos } from "../../../util/constants";
import ShadowCard from "../../../card/ShadowCard";

export default function Skills(props){

    let containerClass = `
        py-28
        w-screen
        xl:h-screen
        h-min
        bg-home-skills-bgcolor 
    `;

    let title = `
        block
        text-center
        text-home-skills-title
        text-5xl
        font-black
        w-screen
        mb-24
    `;

    let mainRow = `
        w-screen
        flex
        flex-wrap
        gap-1
        gap-y-16
        justify-evenly
    `;

    
    let card = `
        xl:w-3/12
        md:w-5/12
        sm:w-9/12
        w-10/12

        transition-all
        duration-200
    `;

    let logo = `
        object-scale-down
        w-full
        h-auto
    `;

    let logoDiv = `
        w-[25%]
    `;

    let logoLabelDiv =`
        w-full
    `;

    let logoLabel = `
        mt-5
        block
        text-center
        w-full
        text-lg
        font-semibold
        tracking-wide
        text-home-skills-label
    `;

    let logoContainer = `
        flex
        flex-wrap
        justify-evenly
        gap-y-9
        gap-x-5
    `;

    function getLogos(arr){
        let elementArr = [];

        for(let i = 0; i < arr.length; i++){
            elementArr.push(
                <>
                    <div className={logoDiv}>
                        <img src={arr[i].logo} className={logo} alt={arr[i].name}/>
                        <div className={logoLabelDiv}>
                            <span className={logoLabel}>
                                {arr[i].name}
                            </span>
                        </div>
                    </div>
                </>
        );
        }

        return elementArr;
    }

    return(
        <>
            <div id="skillsSection" className={containerClass}>
                <h2 className={title}>What I Do Best</h2>
                <div className={mainRow}>
                    <ShadowCard
                        title="Font End" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        <div className={logoContainer}>
                            {
                                getLogos(frontEndLogos)
                            }
                        </div>
                    </ShadowCard>

                    <ShadowCard
                        title="Back End" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        <div className={logoContainer}>
                            {
                                getLogos(backEndLogos)
                            }
                        </div>
                    </ShadowCard>


                    <ShadowCard
                        title="Others" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        <div className={logoContainer}>
                            {
                                getLogos(othersLogos)
                            }
                        </div>
                    </ShadowCard>

                </div>
            </div>
        </>
    );

}