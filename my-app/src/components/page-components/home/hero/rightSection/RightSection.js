export default function RightSection(props){


    let container = `
        p-16
        flex
        flex-col
    `;

    let linksText=`
        text-5xl
        font-black
        tracking-wider
        text-nowrap

        relative
        text-black
    `;


    let linkBtnGroup=`
        relative 
        inline-block 
        group
        py-2
        px-5
        w-min

        mt-7
        first:mt-0
    `;

    let linkBoxShadow=`
        absolute 
        inset-0 
        w-full 
        h-full 
        transition 
        duration-400 
        ease-out 
        transform 
        translate-x-3 
        translate-y-3 
        bg-home-link-color 
        group-hover:-translate-x-0 
        group-hover:-translate-y-0
    `;

    let linkBoxBg=`
        absolute 
        inset-0 
        w-full 
        h-full 
        bg-home-link-bgcolor 
        border-4 
        border-home-link-color
    `;
        // group-focus:bg-home-link-hover-bgcolor



    return(
    <>
        <div className={container}>
            {/* <a href='#top'className={linksText} >Home</a>
            <NavLink className={linksText} to="/AboutMe">About Me</NavLink>
            <NavLink className={linksText} to="/AboutMe">Projects</NavLink>
            <NavLink className={linksText} to="/AboutMe">Milestones</NavLink>
            <NavLink className={linksText} to="/AboutMe">Contact Me</NavLink> */}


            {/* <button className={linkBtnGroup}>
                <span className={linkBoxShadow}></span>
                <span className={linkBoxBg}></span>
                <a href='#top'className={linksText} >Home</a>
            </button> */}
            <button className={linkBtnGroup}>
                <span className={linkBoxShadow}></span>
                <span className={linkBoxBg}></span>
                {/* <NavLink className={linksText} to="/AboutMe">About Me</NavLink> */}
                <a href='#aboutMeSection'className={linksText} >About Me</a>
            </button>
            <button className={linkBtnGroup}>
                <span className={linkBoxShadow}></span>
                <span className={linkBoxBg}></span>
                <a href='#skillsSection'className={linksText} >Skills</a>
            </button>
            <button className={linkBtnGroup}>
                <span className={linkBoxShadow}></span>
                <span className={linkBoxBg}></span>
                {/* <NavLink className={linksText} to="/AboutMe">Projects</NavLink> */}
                <a href='#projectsSection'className={linksText} >Projects</a>
            </button>
            <button className={linkBtnGroup}>
                <span className={linkBoxShadow}></span>
                <span className={linkBoxBg}></span>
                {/* <NavLink className={linksText} to="/AboutMe">Contact Me</NavLink> */}
                <a href='#contactMeSection'className={linksText} >Contact Me</a>
            </button>
        </div>

    </>
    );
}