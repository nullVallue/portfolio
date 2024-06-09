import Card from "../../../card/Card";
import { frontEndLogos } from "../../../util/constants";

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
        object-contain
        w-[30%]
    `;

    let logoContainer = `
        flex
        flex-wrap
        justify-evenly
        gap-y-8
    `;

    function getLogos(arr){
        let elementArr = [];

        for(let i = 0; i < arr.length; i++){
            elementArr.push(<img src={arr[i]} className={logo}/>);
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
                        hi
                    </Card>

                    <Card 
                        title="Others" 
                        className={card}
                        titleFontSize="2xl"
                    >
                        hi
                    </Card>


                </div>
            </div>
        </>
    );

}