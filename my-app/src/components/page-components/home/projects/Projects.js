import ImgCardSharp from "../../../card/ImgCardSharp";
import PillSharp from "../../../small-components/pill/sharp/PillSharp";
import { projectsArr } from "../../../util/constants";

export default function Projects(props){


    let containerClass = `
        w-screen
        bg-home-projects-bgcolor 
        py-28
    `;

    let title = `
        block
        text-center
        text-home-projects-title
        sm:text-5xl
        text-4xl
        font-black
        w-screen
        sm:mb-24
        mb-16

    `;

    let cardContainer = `
        w-screen
        flex
        flex-wrap
        gap-10
        gap-y-20
        justify-evenly
        mt-10
    `;

    let card=`
        xl:w-3/12
        md:w-5/12
        sm:w-10/12
        w-11/12

        transition-all
        duration-200
    `;

    let pillContainer = `
        gap-2
        mt-3
        flex
    `;

    function getProjects(arr){
        let elementArr = [];

        arr.forEach(p => {
            let pillElements = [];

            p.skills.forEach(e => {
                pillElements.push(
                    <PillSharp
                        bgColor={e.mainColor}
                        textColor={e.textColor}
                        // textColor={e.mainColor}
                        // borderColor={e.mainColor}
                    >
                        {
                            "#" + e.name
                        }
                    </PillSharp>
                );
            });


            elementArr.push(
                <ImgCardSharp
                    className={card}
                    title={p.title}
                    src={p.cardThumbnail}
                    pointer={true}
                    href={p.projectLink}
                    linkText={`Check out ${p.title}`}
                >
                    {
                        p.description
                    }
                    <div className={pillContainer}>
                        {
                            pillElements
                        }
                    </div>
                </ImgCardSharp>
            );
        });

        return elementArr;
    }

    return (
        <>
            <div id="projectsSection" className={containerClass}>
                <h2 className={title}>Projects</h2>

                <div className={cardContainer}>
                    {
                        getProjects(projectsArr)
                    }
                </div>

            </div>
        </>
    );


}