import { aboutMeP, aboutMePic} from "../../../util/constants";

export default function AboutMe(props){

    let containerClass = `
        py-28
        w-screen
        bg-home-aboutme-bgcolor 
        flex
        h-min
        min-h-screen
    `;


    let titleClass = `
        text-home-aboutme-title
        text-6xl
        font-black
    `;

    let paragraphClass = `
        text-home-aboutme-p
        text-3xl
        font-semibold
        mt-10
    `;

    let leftContainer = `
        px-16
        w-1/2
        h-min
    `;

    let rightContainer = `
        w-1/2
        px-16
        h-min
        max-h-screen
        my-auto
    `;

    let imgFrame = `
        h-full
        w-full
        p-5
        bg-home-aboutme-framebg
    `;

    let imgClass = `
        object-cover
        w-full
        max-h-[60vh]
    `;


    return(
        <>
            <div className={containerClass}>

                <div className={leftContainer}>
                    <h1 className={titleClass}>About Me</h1>
                    <p className={paragraphClass}>
                        {aboutMeP}
                    </p>
                </div>

                <div className={rightContainer}>
                    <div className={imgFrame}>
                        <img className={imgClass} src={aboutMePic} alt="Me" />
                    </div>
                </div>

            </div>
        </>
    );
}