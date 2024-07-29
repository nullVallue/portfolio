import { aboutMeP, aboutMePic} from "../../../util/constants";

export default function AboutMe(props){

    let containerClass = `
        py-28
        w-screen
        bg-home-aboutme-bgcolor 
        flex
        flex-wrap
        h-min
        min-h-screen
    `;


    let titleClass = `
        text-home-aboutme-title
        sm:text-6xl
        text-4xl
        font-black
    `;

    let paragraphClass = `
        text-home-aboutme-p
        sm:text-3xl
        text-xl
        font-semibold
        mt-10
    `;

    let leftContainer = `
        sm:px-16
        px-5
        lg:w-1/2
        w-full
        h-min


        transition-all
        duration-200
    `;

    let rightContainer = `
        sm:px-16
        px-5
        lg:w-1/2
        lg:mt-0
        mt-10
        w-full
        h-min
        max-h-screen
        my-auto

        transition-all
        duration-200
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
            <div id="aboutMeSection" className={containerClass}>

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