import ImgCard from "../../../card/ImgCard";
import Pill from "../../../small-components/pill/base/Pill";
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
        text-5xl
        font-black
        w-screen
    `;

    let cardContainer = `
        w-screen
        flex
        flex-wrap
        gap-x-3
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
                    <Pill
                        bgColor={e.mainColor}
                        textColor={e.textColor}
                    >
                        {
                            "#" + e.name
                        }
                    </Pill>
                );
            });


            elementArr.push(
                <ImgCard
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
                </ImgCard>
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