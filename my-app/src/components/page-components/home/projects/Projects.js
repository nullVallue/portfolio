

export default function Projects(props){


    let containerClass = `
        w-screen
        h-screen
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

    return (
        <>
            <div id="projectsSection" className={containerClass}>
                <h2 className={title}>Projects</h2>

            </div>
        </>
    );


}