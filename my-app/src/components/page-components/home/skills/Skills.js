import { backEndLogos, frontEndLogos, othersLogos } from "../../../util/constants";
import Card from "../../../card/OutlineCard";

export default function Skills(props){

    let containerClass = `
        py-28
        w-screen
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
    `;

    let mainRow = `
        w-screen
        flex
        justify-evenly
        mt-10
    `;
    
    let card = `
        w-3/12
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
            <div className={containerClass}>
                <h2 className={title}>Skills</h2>
                <div className={mainRow}>
                    <Card 
                        title="Font End" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        <div className={logoContainer}>
                            {
                                getLogos(frontEndLogos)
                            }
                        </div>
                    </Card>

                    <Card 
                        title="Back End" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        <div className={logoContainer}>
                            {
                                getLogos(backEndLogos)
                            }
                        </div>
                    </Card>

                    <Card 
                        title="Others" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        <div className={logoContainer}>
                            {
                                getLogos(othersLogos)
                            }
                        </div>
                    </Card>


                </div>
            </div>
        </>
    );

}